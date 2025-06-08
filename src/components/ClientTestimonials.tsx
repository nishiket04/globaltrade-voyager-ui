
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Industries",
    content: "GlobalTrade Exports transformed our international operations. Their expertise in logistics and customs handling saved us both time and money.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    company: "Precision Manufacturing",
    content: "Outstanding service from start to finish. They made expanding into Asian markets seamless and stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emma Rodriguez",
    company: "Global Textiles Ltd",
    content: "Professional, reliable, and always available when we need them. Highly recommend their trade consultation services.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-20 bg-light-cyan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our export services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-custom rounded-xl">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-cyan mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
