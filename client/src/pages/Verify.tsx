import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Mail, Phone, CheckCircle, Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/authContext";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/Gurutattva-Logo-Regi_1769940433810.png";

type VerificationType = "email" | "phone";

export default function Verify() {
  const [, setLocation] = useLocation();
  const { user, verifyEmail, verifyPhone, sendEmailOtp, sendPhoneOtp } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<VerificationType>("email");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    
    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const verify = activeTab === "email" ? verifyEmail : verifyPhone;
    const success = await verify(otpString);
    
    if (success) {
      toast({
        title: `${activeTab === "email" ? "Email" : "Phone"} verified!`,
        description: "Your account has been verified successfully.",
      });
      
      if (activeTab === "email" && user && !user.isPhoneVerified) {
        setActiveTab("phone");
        setOtp(["", "", "", "", "", ""]);
      } else {
        setLocation("/profile");
      }
    } else {
      toast({
        title: "Verification failed",
        description: "Invalid OTP. Please try again. (Hint: use 123456)",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleResend = async () => {
    setIsResending(true);
    const sendOtp = activeTab === "email" ? sendEmailOtp : sendPhoneOtp;
    await sendOtp();
    setCountdown(30);
    toast({
      title: "OTP sent!",
      description: `A new OTP has been sent to your ${activeTab}.`,
    });
    setIsResending(false);
  };

  const isEmailVerified = user?.isEmailVerified;
  const isPhoneVerified = user?.isPhoneVerified;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <img src={logoImage} alt="GuruTattva" className="h-12 w-auto mx-auto mb-4 cursor-pointer" data-testid="img-verify-logo" />
          </Link>
          <h1 className="text-2xl font-serif font-bold text-foreground">Verify Your Account</h1>
          <p className="text-muted-foreground">Complete verification to access all features</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeTab === "email" ? "default" : "outline"}
                className={`flex-1 ${activeTab === "email" ? "bg-primary" : ""}`}
                onClick={() => {
                  setActiveTab("email");
                  setOtp(["", "", "", "", "", ""]);
                }}
                disabled={isEmailVerified}
                data-testid="button-tab-email"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
                {isEmailVerified && <CheckCircle className="h-4 w-4 ml-2 text-green-500" />}
              </Button>
              <Button
                variant={activeTab === "phone" ? "default" : "outline"}
                className={`flex-1 ${activeTab === "phone" ? "bg-primary" : ""}`}
                onClick={() => {
                  setActiveTab("phone");
                  setOtp(["", "", "", "", "", ""]);
                }}
                disabled={isPhoneVerified}
                data-testid="button-tab-phone"
              >
                <Phone className="h-4 w-4 mr-2" />
                Phone
                {isPhoneVerified && <CheckCircle className="h-4 w-4 ml-2 text-green-500" />}
              </Button>
            </div>
            <CardTitle className="text-xl font-serif">
              Verify {activeTab === "email" ? "Email" : "Phone Number"}
            </CardTitle>
            <CardDescription>
              Enter the 6-digit OTP sent to your {activeTab === "email" ? "email address" : "phone number"}
              <br />
              <span className="text-xs text-primary">(For demo, use: 123456)</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold"
                    data-testid={`input-otp-${index}`}
                  />
                ))}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground"
                disabled={isLoading || otp.join("").length !== 6}
                data-testid="button-verify-submit"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Verify {activeTab === "email" ? "Email" : "Phone"}
                  </>
                )}
              </Button>

              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleResend}
                  disabled={countdown > 0 || isResending}
                  data-testid="button-resend-otp"
                >
                  {isResending ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  {countdown > 0
                    ? `Resend in ${countdown}s`
                    : "Resend OTP"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          {user && (
            <Link href="/profile">
              <Button variant="outline" size="sm" data-testid="button-skip-to-profile">
                Skip for now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
