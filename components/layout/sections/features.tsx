import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Code",
    title: "Modern Tech Stack",
    description:
      "We use cutting-edge technologies like React, Next.js, TypeScript, and cloud-native solutions to build future-proof software.",
  },
  {
    icon: "Shield",
    title: "Security First",
    description:
      "Security is built into every layer of our development process, protecting your data and your users.",
  },
  {
    icon: "Rocket",
    title: "Rapid Delivery",
    description:
      "Agile development practices ensure fast iterations and quick time-to-market without compromising quality.",
  },
  {
    icon: "Users",
    title: "Dedicated Team",
    description:
      "Work with a committed team of developers, designers, and project managers focused on your success.",
  },
  {
    icon: "Headphones",
    title: "Ongoing Support",
    description:
      "We don't just build and leave. We provide continuous support, maintenance, and updates for your software.",
  },
  {
    icon: "Scale",
    title: "Scalable Solutions",
    description:
      "Our architectures are designed to grow with your business, handling increased load and new features seamlessly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose Littu
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We combine technical excellence with a client-first approach to deliver software that exceeds expectations and drives real business results.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
