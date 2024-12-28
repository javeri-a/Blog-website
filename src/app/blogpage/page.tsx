
import Link from "next/link"; // Import the Link component

import Image from "next/image";

interface CardData {
  id: number;
  category: string;
  date: string;
  title: string;
  content:string,
  description: string;
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    category: "Travel",
    date: "October 2023",
    title: "8 Rules Of Traveling in Sea You Need To Know",
    content:"A guide to safe and enjoyable sea journeys, from understanding marine protocols to packing essential supplies.Traveling by sea is an experience that combines tranquility, adventure, and the beauty of nature. The gentle sway of the waves, the salty breeze, and the endless expanse of water create a unique sense of freedom and exploration. However, behind the charm and serenity of sea travel lies the need for careful preparation and respect for maritime protocols. The ocean, while captivating, can be unpredictable, and being unprepared can turn an enjoyable trip into a challenging ordeal.Whether you're planning a short ferry ride, a luxurious cruise, or an adventurous sailing expedition, understanding the fundamentals of sea travel is key. From ensuring your safety to maximizing your comfort, there are important rules every traveler should follow. These eight essential guidelines are designed to help you prepare for the journey, adapt to the rhythm of the sea, and navigate through challenges with ease. With these in mind, you can embark on your adventure confidently, ready to create unforgettable memories while respecting the power and beauty of the ocean.Let’s dive into the details and explore the eight rules that every sea traveler needs to know for a safe, smooth, and memorable journey.",



    description:
      "A guide to safe and enjoyable sea journeys, from understanding marine protocols to packing essential supplies.",
    imageUrl: "/1.png",
  },
  {
    id: 2,
    category: "Tips",
    date: "September 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    content:"How to Build a Strong Portfolio and Get a Job in UI/UX Learn the key strategies to showcase your skills and create a portfolio that attracts top recruiters. In the competitive world of UI/UX design, your portfolio is your strongest asset. It’s more than just a collection of your work—it's your story, your skills, and your potential, all presented in a way that resonates with recruiters and clients. A well-crafted portfolio can be the key to unlocking incredible opportunities and landing your dream job in the industry.But how do you create a portfolio that stands out in a sea of talent? What should you include to ensure it reflects your expertise while showcasing your creative flair? Building a strong UI/UX portfolio requires more than uploading a few project screenshots; it demands thoughtful curation, strategic presentation, and a focus on what truly matters to your target audience.In this guide, we’ll walk you through the essential steps to craft a compelling portfolio and share actionable tips for securing a job in the highly sought-after field of UI/UX design. From selecting the right projects to demonstrating your problem-solving process, this article will help you put your best foot forward and leave a lasting impression on hiring managers. Let’s explore how you can turn your portfolio into a powerful tool that not only showcases your talent but also opens doors to exciting career opportunities in UI/UX design.",
    description:
      "Learn the key strategies to showcase your skills and create a portfolio that attracts top recruiters.",
    imageUrl: "/2.png",
  },
  {
    id: 3,
    category: "Sports",
    date: "August 2023",
    title: "How to Be a Professional Footballer in 2023",
    content:"Discover the skills and training required to become a professional football player and how to excel in the field. Becoming a professional footballer in 2023 is a dream shared by millions around the globe, but turning that dream into reality requires more than just talent. It demands relentless commitment, strategic planning, and a comprehensive approach to personal and professional development. The journey begins with mastering the technical aspects of the game—ball control, dribbling, accurate passing, powerful shooting, and tactical positioning. These skills must be honed consistently through focused practice and high-quality coaching. Equally important is physical fitness; football is a demanding sport that requires speed, stamina, strength, and agility. Regular fitness training, combined with a balanced diet, adequate rest, and injury prevention measures, is essential for peak performance.Modern football has evolved to place a greater emphasis on mental toughness, adaptability, and intelligence on the field. Players need to study the game, understand different formations, and adapt to various playing styles to stay relevant in competitive matches. Joining a reputable football academy or club provides access to structured training programs, exposure to scouts, and opportunities to compete at higher levels. Building a strong personal brand is another important factor in today’s football landscape. Maintaining an active social media presence, showcasing skills in videos, and participating in tournaments or trials can attract attention from recruiters.The path to becoming a professional footballer also requires discipline and resilience. Success in the sport is a marathon, not a sprint, and setbacks like injuries, competition, and rejection are part of the journey. Staying focused on long-term goals, seeking mentorship from experienced coaches, and maintaining a growth mindset are crucial for overcoming challenges. Moreover, aspiring players should remember that education and personal development are just as important as football skills, as they provide a solid foundation for life outside the sport. With a clear vision, unyielding determination, and a willingness to adapt and grow, anyone with a passion for football can rise to the professional level and excel in this dynamic and thrilling field.",

    description:
      "Discover the skills and training required to become a professional football player and how to excel in the field.",
    imageUrl: "/3.png",
  },
  {
    id: 4,
    category: "Sports",
    date: "August 2023",
    title: "How to make a Game look more attractive with New VR & AI Technology",
    content:"The gaming industry is evolving at a breathtaking pace, and Virtual Reality (VR) and Artificial Intelligence (AI) are at the forefront of this transformation. These technologies are redefining the way games are developed and experienced, making them more immersive, interactive, and visually stunning than ever before. But how exactly can these innovations make a game more attractive to players? With VR, games are no longer limited to a screen; they transport players into a three-dimensional world where they can interact with environments, characters, and objects in a lifelike manner. From detailed landscapes to realistic physics, VR creates a sense of presence that captivates players, making them feel like an integral part of the story. Developers can enhance this experience by incorporating high-resolution textures, responsive controls, and dynamic soundscapes that adapt to the players actions, providing a seamless and engaging experience.  AI, on the other hand, brings intelligence and adaptability to games. Modern AI technology enables developers to create characters that learn and respond dynamically to players strategies, offering unique challenges and surprises in every playthrough. Procedural content generation powered by AI ensures that no two gaming sessions are the same, providing endless replayability. Additionally, AI-driven graphics optimization enhances visual fidelity, delivering hyper-realistic environments, lifelike animations, and personalized in-game elements tailored to each players preferences.  When combined, VR and AI open up endless possibilities for game developers to innovate and captivate. Imagine stepping into a VR world where AI-driven NPCs (non-playable characters) adapt to your behavior, crafting a narrative that feels tailored specifically to you. Or consider a multiplayer experience where AI creates dynamic weather conditions and challenges, ensuring a fresh and engaging environment every time you play.  By leveraging these cutting-edge technologies, developers can create games that push the boundaries of imagination, delivering experiences that are not only visually attractive but also deeply engaging and memorable. As VR and AI continue to advance, the future of gaming promises to be more exciting and immersive than ever before.",
    description:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it is publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we are committed to making AI accessible to everyone.",
    imageUrl: "/2nd.png",
  },
  {
    id: 5,
    category: "Sports",
    date: "August 2023",
    title: "Best Website to research for your  next project",
    content:"Researching for a new project requires diving deep into reliable, insightful, and versatile resources that help you turn your ideas into actionable plans. The internet is a vast ocean of information, but not all websites offer the level of depth and quality needed for meaningful research. Finding the right platform that caters to your specific project requirements can make the difference between success and stagnation.  One of the standout destinations for project research is a combination of platforms that integrate robust academic resources, creative inspiration, and technical insights. These websites empower users to explore cutting-edge developments, analyze trends, and access peer-reviewed content, making them invaluable for brainstorming and execution. Whether you're looking for detailed statistical data, innovative design ideas, or technological frameworks, these websites serve as gateways to the knowledge that drives impactful outcomes. By prioritizing these tools in your research journey, you gain access to expertly curated content, user-friendly interfaces, and a collaborative environment that fuels creativity and precision. Each visit is an opportunity to uncover new insights and approaches, ultimately helping you bridge the gap between conceptualization and realization in your project endeavors.", 

    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    imageUrl: "/p2.png",
  },
  {
    id: 6,
    category: "Sports",
    date: "August 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    content:"Dancing is a form of expression that transcends language, culture, and time. It is a universal art that connects people, tells stories, and evokes emotions through movement and rhythm. Whether you're a seasoned dancer or a beginner looking to explore this captivating world, there are essential skills and techniques that can help you excel in your practice. From mastering basic steps to developing your own unique style, dancing offers a wide range of benefits that go beyond physical fitness. It enhances coordination, flexibility, and balance, while also boosting creativity, confidence, and self-expression. To become a skilled dancer in 2023, you need to cultivate a strong foundation in various dance styles, such as ballet, hip-hop, contemporary, or ballroom. Each genre has its own set of movements, techniques, and musicality that require dedicated practice and discipline. Attending dance classes, workshops, and training sessions can help you refine your skills, learn new choreography, and connect with like-minded individuals who share your passion. Additionally, staying informed about the latest trends, performances, and competitions in the dance world can inspire you to push your boundaries and explore new possibilities. As you progress on your dance journey, remember that consistency, perseverance, and a growth mindset are key to achieving your goals. Embrace challenges",
    description:"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
    imageUrl: "/p3.png",
  },
  {
    id: 7,
    category: "Sports",
    date: "August 2023",
    title: "Who is the best singer on chart?Know him?",
    content:"The music industry is home to a diverse array of talented singers, each with their own unique style, voice, and fan base. While personal preferences play a significant role in determining the best singer, there are certain artists who have achieved widespread acclaim and recognition for their vocal abilities, stage presence, and chart-topping hits. One way to identify the best singer on the chart is to look at their commercial success, critical acclaim, and overall impact on the music industry. Artists who consistently top the charts, win awards, and receive positive reviews from critics are often considered among the best in the business. Additionally, singers who connect with audiences on an emotional level, deliver powerful performances, and demonstrate versatility across different genres are highly regarded by fans and industry professionals alike. The Billboard Hot 100 chart is a reliable source for tracking the success of singers and ranking them based on their chart performance. By analyzing data such as number of hits, weeks on the chart, and peak positions, you can gain insights into which artists are dominating the music scene and setting new standards for excellence. Whether you prefer pop, rock, hip-hop, or country music, the best singer on the chart is someone who resonates with you personally and leaves a lasting impression with their music. By exploring different genres, discovering new artists, and staying informed about the latest trends in the industry, you can expand your musical horizons and appreciate the diverse talents that make the world of music so vibrant and exciting.",
    description:
      "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ",
    imageUrl: "/p4.png",
  },
  {
    id: 8,
    category: "Sports",
    date: "August 2023",
    title: "How to start export import business from home?",
    content:"Starting an export-import business from home is an exciting venture that offers endless opportunities for growth, innovation, and global connections. With the rise of e-commerce platforms, digital marketing tools, and international trade agreements, launching a successful export-import business has never been more accessible. Whether you're looking to sell handmade crafts, source unique products, or connect buyers and sellers across borders, there are key steps you can take to establish a profitable home-based business. Begin by researching the market, identifying potential products or services, and understanding the legal requirements for international trade. Develop a business plan that outlines your goals, target audience, marketing strategies, and financial projections. Create a strong brand identity, build an online presence, and establish relationships with suppliers, manufacturers, and customers. Leverage social media, e-commerce platforms, and digital marketing tools to reach a global audience and promote your products or services. Stay informed about industry trends, trade regulations, and market demands to stay ahead of the competition and adapt to changing business environments. By combining passion, creativity, and strategic planning, you can turn your export-import business into a thriving enterprise that connects people, cultures, and economies around the world.",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    imageUrl: "/p5.png",
  },
  {
    id: 9,
    category: "Sports",
    date: "August 2023",
    title: "Make some drinks with chocolates chocolates and milk",
    content:"Chocolate milk is a delicious and nutritious beverage that combines the rich, creamy flavor of chocolate with the goodness of milk. It's a popular choice for kids and adults alike, offering a tasty way to boost your calcium intake, refuel after exercise, or satisfy your sweet tooth. Making chocolate milk at home is quick and easy, requiring just a few simple ingredients and a blender. Start by choosing your favorite type of chocolate—whether it is dark, milk, or white—and melting it in a saucepan with a splash of milk. Once the chocolate is melted, add the remaining milk, a pinch of salt, and a touch of vanilla extract for extra flavor. Blend the mixture until smooth and frothy, then pour it into a glass and enjoy! For an extra indulgent treat, top your chocolate milk with whipped cream, chocolate shavings, or a sprinkle of cocoa powder. You can also experiment with different flavorings, such as cinnamon, peppermint, or caramel, to create your own signature chocolate milk recipe. Whether you're looking for a comforting drink on a cold day or a refreshing treat in the summer, chocolate milk is a versatile and satisfying beverage that's sure to delight your taste buds.",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    imageUrl: "/p6.png",
  },
 
];

export default function Cards() {
  return (
<div>
<div className="text-center py-4">
      <h4>OUR BLOGS</h4>
      <h6 className="text-2xl font-bold"> Find our all blogs from here</h6>
      <h5>our blogs are written from very research research and well known writers writers so that <br /> we can provide you the best blogs and articles articles for you to read them all along</h5>
     </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-8">
     
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <Image
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-2">
              {card.category} | {card.date}
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
           
            <Link
              href={`/posts/${card.id}`} // Dynamically link to the blog detail page
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Read More...
            </Link>
          </div>
        </div>
      ))}
    
    </div>
    </div>
   
    
    
  );
}
