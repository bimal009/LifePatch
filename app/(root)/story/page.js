import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stories = [
  {
    name: "Ramesh",
    role: "Kidney Recipient, Kathmandu",
    avatar: "/avatars/ramesh.jpg",
    fallback: "R",
    quote:
      "After three years on dialysis, I matched with a donor just 80 kilometers away. I never thought a stranger’s generosity would save me. LifePatch made the impossible happen.",
  },
  {
    name: "Anita",
    role: "Donor's Mother",
    avatar: "/avatars/anita.jpg",
    fallback: "A",
    quote:
      "My daughter was just 18 when she passed in a road accident. We chose to donate her organs. Through LifePatch, we learned her liver saved a child in Pokhara. It gave us peace.",
  },
  {
    name: "Sushil",
    role: "Recipient’s Brother",
    avatar: "/avatars/sushil.jpg",
    fallback: "S",
    quote:
      "Every week we checked LifePatch, hoping for a match. After six months, we finally received a call. My brother got a heart transplant and is now in recovery. It was worth the wait.",
  },
  {
    name: "Anonymous",
    role: "Recipient's Daughter",
    avatar: "",
    fallback: "D",
    quote:
      "Dear Donor Family, I don’t know your name, but your decision gave my father a new life. He walks, eats, and laughs again. We thank you every day.",
  },
  {
    name: "Bikash",
    role: "Living Donor",
    avatar: "/avatars/bikash.jpg",
    fallback: "B",
    quote:
      "I donated part of my liver to my cousin. LifePatch gave us medical support and helped with logistics. I feel proud knowing I made a real difference.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-[var(--primary)]">
          Donor & Family Stories
        </h1>
        <p className="text-gray-600 mt-2">
          Real people. Real transformations. Stories that inspire compassion and
          hope.
        </p>
      </div>

      {/* Grid of Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stories.map((story, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={story.avatar} alt={story.name} />
                <AvatarFallback>{story.fallback}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{story.name}</CardTitle>
                <p className="text-sm text-gray-500">{story.role}</p>
              </div>
            </CardHeader>
            <CardContent className="pt-2 text-sm text-gray-700 italic">
              “{story.quote}”
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
