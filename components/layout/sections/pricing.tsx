import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 2500,
    description:
      "Perfect for MVPs, landing pages, and small web applications.",
    buttonText: "Get Started",
    benefitList: [
      "Single page application",
      "Responsive design",
      "Basic hosting setup",
      "2 rounds of revisions",
      "30 days support",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 7500,
    description:
      "Ideal for growing businesses needing custom software solutions.",
    buttonText: "Get Started",
    benefitList: [
      "Full-stack web application",
      "Database integration",
      "User authentication",
      "API development",
      "90 days support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 0,
    description:
      "For complex, large-scale projects requiring dedicated resources.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom architecture design",
      "Dedicated development team",
      "Priority support & SLA",
      "Ongoing maintenance",
      "Training & documentation",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Transparent Pricing
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the package that fits your needs. All projects include clean code, documentation, and post-launch support.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{price === 0 ? "Custom" : `$${price.toLocaleString()}`}</span>
                  <span className="text-muted-foreground">{price > 0 && " starting"}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
