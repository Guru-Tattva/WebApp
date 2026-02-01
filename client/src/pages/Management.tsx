import { useState } from "react";
import { Users, Building2, ChevronDown, ChevronUp, Phone, Briefcase, TreePine, Palette, Home, HardHat, Headphones, GraduationCap, Network, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  phone?: string;
}

interface Department {
  id: string;
  name: string;
  icon: typeof Users;
  description: string;
  concerns?: string[];
  solutions?: string[];
  objectives?: string[];
  members: TeamMember[];
}

interface Council {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  departments: Department[];
}

const councils: Council[] = [
  {
    id: "sadhak-sanskar",
    name: "Sadhak Sanskar Parishad",
    nameHindi: "साधक संस्कार परिषद",
    description: "Nurturing spiritual growth and development of seekers through structured programs and support systems.",
    departments: [
      {
        id: "office-management",
        name: "Office Management Department",
        icon: Settings,
        description: "Ensures smooth administration, clear processes, and accountable systems, allowing every council and team to work efficiently and stay connected with Gurukarya.",
        concerns: [
          "Processes are not uniform across Dhyansthalis",
          "Reporting and documentation sometimes get delayed",
          "Disputes lack a standard handling mechanism",
          "Communication systems are inconsistent"
        ],
        solutions: [
          "Creating clear SOPs for offerings, MOUs, and disputes",
          "Digitising volunteer records with defined roles",
          "Establishing call-handling desks at all Dhyansthalis",
          "Monthly coordination meetings for alignment"
        ],
        objectives: [
          "100% documentation and reporting within set timelines",
          "Standardised dispute-resolution workflow",
          "Fully functional call desks across Dhyansthalis",
          "Digitised volunteer database with regular orientations"
        ],
        members: [
          { name: "Nitesh Tadvi", role: "Operation Head", phone: "+91 98765 43210" },
          { name: "Hiren Patel", role: "Instructor", phone: "+91 98765 43211" },
          { name: "Ketul Sharma", role: "Intern" },
          { name: "Dipten Modi", role: "Intern" }
        ]
      },
      {
        id: "network-development",
        name: "Network Development Department",
        icon: Network,
        description: "Builds meaningful relationships with corporates, institutions, NGOs, and professionals through MOUs and partnerships.",
        concerns: [
          "Corporate meditation centres are still limited",
          "Corporate teams need structured support for regular practice"
        ],
        solutions: [
          "Encourage meditation centres inside corporate offices",
          "Invite corporate groups to Dhyansthalis for retreats",
          "Train corporate instructors and create workshops",
          "Build authorised volunteer teams for professional sessions"
        ],
        objectives: [
          "Develop corporate meditation centres across states",
          "Create national pool of trained corporate instructors",
          "Offer regular counselling and wellness workshops",
          "Build state-level networking teams"
        ],
        members: [
          { name: "Rajesh Kumar", role: "Head - Corporate Relations" },
          { name: "Priya Desai", role: "Partnership Manager" },
          { name: "Vikram Shah", role: "Training Coordinator" }
        ]
      },
      {
        id: "helpline",
        name: "Sadhak Seva Helpline Department",
        icon: Headphones,
        description: "Offers compassionate listening, guidance, and verification support for seekers through calls, chats, WhatsApp, and follow-ups.",
        concerns: [
          "Seekers often feel unsure of whom to contact",
          "Information is scattered across channels",
          "Follow-ups and FAQs are not always documented"
        ],
        solutions: [
          "Dedicated 24×7 helpline channels",
          "Structured follow-up system for queries",
          "Content creation: FAQs, experiences, and guidance archives"
        ],
        objectives: [
          "Centralised FAQ and inquiry system on website",
          "Daily messages in major languages",
          "Continuous training classes for volunteers",
          "Birthday greetings and seeker-relationship system"
        ],
        members: [
          { name: "Anita Joshi", role: "Helpline Coordinator", phone: "+91 98765 43215" },
          { name: "Mahesh Trivedi", role: "Senior Volunteer" },
          { name: "Kavita Patel", role: "Support Specialist" }
        ]
      },
      {
        id: "sadhak-sanskar",
        name: "Sadhak Sanskar Department",
        icon: GraduationCap,
        description: "Nurtures holistic spiritual growth across all ages through discipline, training, values, counselling, and life-stage programs.",
        concerns: [
          "Different centres follow different formats",
          "Many seekers need clearer guidance at life stages",
          "Training resources are not uniformly available"
        ],
        solutions: [
          "Standard training modules for centre leaders",
          "Myth-busting, value-based content and exhibitions",
          "Focus programs: Garbhadhan, Bal Sanskar, Youth, Marriage, Senior Well-being"
        ],
        objectives: [
          "Bring uniformity across programs and centres",
          "Create expert teams and regular training",
          "Organise child and youth camps",
          "Develop meditation modules for schools and colleges"
        ],
        members: [
          { name: "Dr. Sunita Mehta", role: "Program Director" },
          { name: "Ramesh Bhatt", role: "Training Head" },
          { name: "Neha Singh", role: "Youth Coordinator" }
        ]
      },
      {
        id: "centre-development",
        name: "Centre Development Department",
        icon: Building2,
        description: "Supports formation, smooth running, and harmony across meditation centres - from operations and feedback to collective meditations and camps.",
        concerns: [
          "New centres require guidance and consistency",
          "Issues sometimes go unresolved or unreported",
          "Large events need streamlined coordination"
        ],
        solutions: [
          "Monitor networks to support 5–20 centres per volunteer",
          "Feedback systems and R&D inputs",
          "Structured planning for Purnima/Sunday meditations"
        ],
        objectives: [
          "Develop more home centres in major cities",
          "Uniform training and material for all centres",
          "1000 home centres in Gandhinagar",
          "Support centre development abroad via country heads"
        ],
        members: [
          { name: "Suresh Patel", role: "Centre Development Head" },
          { name: "Meera Gandhi", role: "Regional Coordinator" },
          { name: "Arvind Sharma", role: "Operations Manager" }
        ]
      }
    ]
  },
  {
    id: "dhyansthali",
    name: "Dhyansthali Parishad",
    nameHindi: "ध्यानस्थली परिषद",
    description: "Managing and developing sacred meditation centres across India and worldwide.",
    departments: [
      {
        id: "operations",
        name: "Parichalan - Operations Department",
        icon: Briefcase,
        description: "Facilitates operations at all Dhyansthalis through Yagya, Yoga, Art-Cultural Events, Security, Celebrations, and Arsh Sankalp Vivah ceremonies.",
        objectives: [
          "Yagya and sacred ceremonies",
          "Yoga & Yogasana sessions",
          "Art-Cultural Events",
          "Security management",
          "Festival Celebrations",
          "Arsh Sankalp Vivah: Value-based wedding ceremony"
        ],
        members: [
          { name: "Kishan Patel", role: "Operations Director" },
          { name: "Yogesh Thakar", role: "Event Coordinator" },
          { name: "Bhavin Shah", role: "Security Head" }
        ]
      },
      {
        id: "sustainability",
        name: "Yojana - Sustainability Department",
        icon: TreePine,
        description: "Making Dhyansthalis stronger and independent through sustainable practices and environmental programs.",
        objectives: [
          "Solar Self-Reliance Program",
          "Water Conservation Program",
          "Biogas Sustainability Program",
          "Agriculture & Financial Empowerment",
          "Environmental Conservation Program",
          "Rural Livelihood Development"
        ],
        members: [
          { name: "Dr. Amit Joshi", role: "Sustainability Head" },
          { name: "Pooja Raval", role: "Environment Coordinator" },
          { name: "Hitesh Modi", role: "Agriculture Expert" }
        ]
      },
      {
        id: "landscape",
        name: "Landscape & Design Department",
        icon: Palette,
        description: "Keeping Dhyansthalis natural by maintaining relevance to nature and all age groups through thoughtful design.",
        objectives: [
          "Beautification: Keeping 70% land natural",
          "Site Planning: Age and need-specific areas",
          "Mother Care Zones",
          "Afforestation: Enhancing biodiversity",
          "Water Management Systems"
        ],
        members: [
          { name: "Architect Nayan Vyas", role: "Design Head" },
          { name: "Sneha Pandya", role: "Landscape Architect" },
          { name: "Vivek Desai", role: "Horticulturist" }
        ]
      },
      {
        id: "estate",
        name: "Estate Management Department",
        icon: Home,
        description: "Providing basic facilities at all Dhyansthalis 365 days a year - cleaning, maintenance, resource and staff management.",
        objectives: [
          "Cleaning & Housekeeping",
          "Maintenance operations",
          "Resource Management",
          "Emergency Management",
          "Staff Management"
        ],
        members: [
          { name: "Jayesh Bhavsar", role: "Estate Manager" },
          { name: "Nilesh Parmar", role: "Maintenance Head" },
          { name: "Reena Solanki", role: "Housekeeping Coordinator" }
        ]
      },
      {
        id: "construction",
        name: "Construction Department",
        icon: HardHat,
        description: "Focusing on construction of various parts of all Dhyansthalis including Shree Gurushaktidham and related projects.",
        objectives: [
          "Shree Gurushaktidham construction",
          "Dhyansthali Projects",
          "Asset Management",
          "Procurement",
          "Quality Control"
        ],
        members: [
          { name: "Er. Pravin Patel", role: "Chief Engineer" },
          { name: "Ketan Mehta", role: "Project Manager" },
          { name: "Dinesh Rathod", role: "Site Supervisor" }
        ]
      }
    ]
  }
];

function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);
  
  return (
    <Card className="border-border/50 hover-elevate">
      <CardContent className="p-4 text-center">
        <Avatar className="w-20 h-20 mx-auto mb-3 border-2 border-primary/20">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : null}
          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-lg font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h4 className="font-semibold text-foreground text-sm mb-1">{member.name}</h4>
        <Badge variant="secondary" className="text-xs mb-2">{member.role}</Badge>
        {member.phone && (
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-2">
            <Phone className="h-3 w-3" />
            <span>{member.phone}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function DepartmentSection({ department }: { department: Department }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = department.icon;

  return (
    <Card className="border-border/50 overflow-hidden">
      <CardContent className="p-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-5 flex items-start gap-4 text-left hover-elevate transition-colors"
          data-testid={`dept-toggle-${department.id}`}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-semibold text-foreground text-lg mb-1">
              {department.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {department.description}
            </p>
          </div>
          <div className="p-2 text-muted-foreground">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 space-y-6 border-t border-border/50 pt-5">
                {department.concerns && department.concerns.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Points of Concern
                    </h4>
                    <ul className="space-y-2">
                      {department.concerns.map((concern, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-amber-500">•</span>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {department.solutions && department.solutions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Solutions: Implemented & Planned
                    </h4>
                    <ul className="space-y-2">
                      {department.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-green-500">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {department.objectives && department.objectives.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Objectives & Planning
                    </h4>
                    <ul className="space-y-2">
                      {department.objectives.map((objective, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Team Members
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {department.members.map((member, i) => (
                      <MemberCard key={i} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export default function Management() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                Management Teams
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated councils and departments working together to 
                nurture spiritual growth and manage sacred spaces across the world
              </p>
            </motion.div>
          </div>
        </section>

        {/* Councils Tabs */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Tabs defaultValue={councils[0].id} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center">
              {councils.map((council) => (
                <TabsTrigger
                  key={council.id}
                  value={council.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-md border border-border/50"
                  data-testid={`tab-${council.id}`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{council.name}</div>
                    <div className="text-xs opacity-80">{council.nameHindi}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {councils.map((council) => (
              <TabsContent key={council.id} value={council.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 text-center">
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      {council.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {council.departments.map((dept) => (
                      <DepartmentSection key={dept.id} department={dept} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="py-16 gradient-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Join Our Sacred Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have experience in event management, logistics, engineering, 
                architecture, counselling, or simply wish to serve, we invite you 
                to contribute to making our Dhyansthalis and programs even better.
              </p>
              <p className="text-sm text-primary font-medium">
                Contact your nearest Dhyansthali to learn about volunteer opportunities
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
}
