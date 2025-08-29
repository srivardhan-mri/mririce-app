// Dummy comment to force file update
import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishDate: string; // YYYY-MM-DD
  imageUrl: string;
  altText: string;
  excerpt: string; // Short summary for list view
  content: string; // Full HTML content for detail view
  tags: string[];
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlogPosts(): BlogPost[] { 
    return this.blogPosts;
  }
  getBlogPostBySlug(slug: string): BlogPost | undefined { 
    return this.blogPosts.find(post => post.slug === slug);
  }

  private blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding Non-Basmati Rice Varieties: JSR vs. HMT vs. Sona Masoori',
      slug: 'understanding-non-basmati-rice-varieties',
      author: 'MRI Rice Team',
      publishDate: '2024-08-29',
      imageUrl: 'assets/images/blog/rice-varieties.webp',
      altText: 'Different types of non-basmati rice grains',
      excerpt: 'Dive deep into the world of non-basmati rice. Learn the unique characteristics of JSR, HMT, and Sona Masoori, and discover which one is perfect for your culinary needs.',
      content: '<p>Non-basmati rice varieties form the staple diet for a significant portion of the world\'s population, especially in India. While Basmati often steals the spotlight for its aroma and long grain, non-basmati rice offers incredible diversity in texture, flavor, and culinary applications. At Miryalguda Rice Industries, we specialize in premium non-basmati varieties, each with its unique characteristics.</p>\n<h2>JSR Rice: The Versatile Staple</h2>\n<p>JSR (Jaya Sannalu Rice) is a popular medium-grain rice known for its versatility and ability to absorb flavors well. It\'s a common choice for everyday meals across many Indian households.</p>\n<ul>\n  <li><strong>Grain:</strong> Medium-sized, plump.</li>\n  <li><strong>Texture:</strong> Soft and slightly sticky when cooked, making it easy to eat with curries.</li>\n  <li><strong>Best For:</strong> Daily consumption, traditional South Indian meals, and dishes where rice needs to blend with gravies.</li>\n</ul>\n<h2>HMT Rice: The Aromatic Everyday Delight</h2>\n<p>HMT rice, often confused with Basmati due to its subtle aroma, is a medium-grain, non-sticky variety. It\'s a favorite for its pleasant fragrance and fluffy texture.</p>\n<ul>\n  <li><strong>Grain:</strong> Medium-sized, slender.</li>\n  <li><strong>Texture:</strong> Fluffy, separate grains after cooking, with a mild aroma.</li>\n  <li><strong>Best For:</strong> Pulao, fried rice, and everyday meals where a non-sticky rice is preferred.</li>\n</ul>\n<h2>Sona Masoori Rice: The Lightweight & Aromatic Choice</h2>\n<p>Sona Masoori is a lightweight and aromatic medium-grain rice, primarily cultivated in the states of Andhra Pradesh and Telangana. It\'s highly prized for its delicate flavor and soft texture.</p>\n<ul>\n  <li><strong>Grain:</strong> Medium-short, slender.</li>\n  <li><strong>Texture:</strong> Very soft, fluffy, and non-sticky, making it easy to digest.</li>\n  <li><strong>Best For:</strong> Biryani, Pulao, sweet dishes, and as a healthy alternative for daily consumption.</li>\n</ul>\n<h3>Choosing the Right Rice for Your Needs</h3>\n<p>Understanding the nuances of each non-basmati variety is key to culinary success. Whether you\'re a wholesaler looking to stock a diverse range for your customers in Kerala, Maharashtra, Tamil Nadu, or Karnataka, or a home cook experimenting with new recipes, Miryalguda Rice Industries offers the highest quality JSR, HMT, and Sona Masoori rice, processed with care and precision.</p>\n<p>Contact us today to learn more about our premium non-basmati rice varieties and how we can meet your bulk supply needs.</p>',
      tags: ['non-basmati', 'rice varieties', 'JSR', 'HMT', 'Sona Masoori'],
      category: 'Rice Education'
    },
    {
      id: '2',
      title: 'The Journey of Rice: From Paddy to Plate at Miryalguda Rice Industries',
      slug: 'paddy-to-plate-mri-rice',
      author: 'MRI Rice Team',
      publishDate: '2024-08-25',
      imageUrl: 'assets/images/blog/paddy-to-plate.webp',
      altText: 'Rice fields and a rice mill',
      excerpt: 'Follow the fascinating journey of our premium rice, from the fertile fields of Miryalguda to your plate. Discover the meticulous process that ensures every grain meets our high standards.',
      content: '<p>At Miryalguda Rice Industries, the journey of every grain of rice is a testament to our unwavering commitment to quality, precision, and tradition. From the moment the paddy is harvested in the fertile fields of Telangana to its final packaging, we meticulously oversee every step to ensure that only the finest rice reaches your table.</p>\n<h2>Step 1: Ethical Sourcing from Local Farmers</h2>\n<p>Our journey begins with strong partnerships. We work directly with local farmers in the renowned Miryalguda rice belt, ensuring ethical sourcing and fair prices. This direct relationship allows us to select only the highest quality paddy, ensuring its purity and optimal maturity.</p>\n<h2>Step 2: Advanced Milling Technology</h2>\n<p>Once sourced, the paddy undergoes a sophisticated milling process in our state-of-the-art facility. We combine decades of traditional expertise with modern machinery to achieve the perfect balance of efficiency and quality. This includes:</p>\n<ul>\n  <li><strong>Cleaning:</strong> Removing impurities like dust, stones, and straw.</li>\n  <li><strong>Dehusking:</strong> Gently removing the outer husk to reveal the brown rice.</li>\n  <li><strong>Polishing:</strong> Further processing to remove the bran layer, resulting in white rice with a smooth, appealing finish.</li>\n  <li><strong>Sorting:</strong> Advanced optical sorters meticulously separate broken grains and discolored kernels, ensuring uniformity.</li>\n</ul>\n<h2>Step 3: Specialized Processing for Steam & Boiled Rice</h2>\n<p>Depending on the variety, our rice undergoes specialized processing:</p>\n<ul>\n  <li><strong>Steam Rice:</strong> Paddy is steamed before milling, which helps to retain nutrients, improve texture, and enhance aroma.</li>\n  <li><strong>Boiled Rice:</strong> Paddy is parboiled (soaked, steamed, and dried) before milling. This process gelatinizes the starch, making the grains harder, reducing breakage during milling, and significantly increasing nutritional value.</li>\n</ul>\n<h2>Step 4: Rigorous Quality Control</h2>\n<p>Quality is not just a step; it\'s an ongoing process. Our dedicated quality control team conducts stringent checks at every stage, from raw material inspection to final product testing. We ensure that our rice meets all industry standards and, more importantly, exceeds our customers\' expectations for taste, texture, and purity.</p>\n<h2>Step 5: Hygienic Packaging & Reliable Supply</h2>\n<p>The final stage involves hygienic packaging in various sizes to meet diverse market needs. Our robust supply chain and efficient logistics ensure that our premium rice, including JSR, HMT, and Sona Masoori, reaches our wholesalers and distributors across India, including Kerala, Maharashtra, Tamil Nadu, and Karnataka, fresh and on time.</p>\n<p>Experience the difference that a commitment to excellence makes. Choose Miryalguda Rice Industries for your bulk rice supply needs.</p>',
      tags: ['rice milling', 'quality process', 'Miryalguda', 'Telangana'],
      category: 'Our Process'
    },
    {
      id: '3',
      title: 'Why Miryalguda Rice is Preferred in Kerala: A Wholesaler\'s Guide',
      slug: 'miryalguda-rice-kerala-wholesalers',
      author: 'MRI Rice Team',
      publishDate: '2024-08-20',
      imageUrl: 'assets/images/blog/kerala-rice.webp',
      altText: 'Traditional Kerala meal with rice',
      excerpt: 'Explore why Miryalguda rice has become a staple in Kerala households and businesses. This guide for wholesalers highlights the unique appeal and consistent supply that makes us the preferred choice.',
      content: "Kerala, with its rich culinary heritage, has a discerning taste for rice. While many varieties are consumed, Miryalguda rice, particularly our premium non-basmati selections, has carved a significant niche in the state's households and businesses. For wholesalers looking to meet this demand, understanding why Miryalguda rice is preferred in Kerala is key.</p>\n<h2>Consistent Quality: A Non-Negotiable for Kerala Consumers</h2>\n<p>Kerala consumers prioritize consistent quality. They expect rice that cooks uniformly, has the right texture, and delivers a satisfying taste every time. Miryalguda Rice Industries, with its rigorous quality control and state-of-the-art milling processes, ensures this consistency. Our JSR, HMT, and Sona Masoori varieties are known for their reliability, making them a trusted choice for daily meals and special occasions.</p>\n<h2>Versatility in Kerala Cuisine</h2>\n<p>Kerala cuisine is incredibly diverse, and our non-basmati rice varieties fit seamlessly into its culinary landscape. Whether it's for the traditional Sadhya, a hearty biryani, or a simple rice and curry, our rice adapts beautifully. The ability of our rice to absorb flavors and maintain its integrity during cooking makes it ideal for the rich and varied dishes of Kerala.</p>\n<h2>Reliable Supply Chain for Wholesalers</h2>\n<p>For wholesalers, a consistent and reliable supply chain is paramount. Miryalguda Rice Industries prides itself on its robust logistics and distribution network, ensuring that our partners in Kerala receive their orders promptly and efficiently. We understand the market demands and work tirelessly to maintain stock levels and delivery schedules.</p>\n<h2>Meeting the Demand for Quality and Value</h2>\n<p>By partnering with Miryalguda Rice Industries, wholesalers in Kerala can confidently offer their customers premium non-basmati rice that meets both their quality expectations and their budget. Our commitment to excellence, from sourcing to packaging, translates into a product that consumers trust and prefer.</p>\n<p>Contact us today to discuss your wholesale requirements and become a part of the Miryalguda Rice success story in Kerala.</p>",
      tags: ['Kerala', 'wholesalers', 'rice market', 'Miryalguda rice'],
      category: 'Market Insights'
    },
  ];
}