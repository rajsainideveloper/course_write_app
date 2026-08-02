# लाभ एवं हानि (Profit & Loss)

व्यापारिक गणित की यह इकाई उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा की रीढ़ है, जहाँ क्रय मूल्य, विक्रय मूल्य, अंकित मूल्य और छूट के सटीक समीकरणों पर आधारित प्रश्न अनिवार्य रूप से पूछे जाते हैं।

## Chapter 7: लाभ एवं हानि और बट्टा

### Section 1 | मूल शब्दावली और अवधारणाएँ

गणितीय विश्लेषण में प्रवेश करने से पहले वाणिज्यिक गणित की आधारभूत शब्दावली को समझना आवश्यक है। किसी भी व्यापारिक लेनदेन में क्रय मूल्य (Cost Price), विक्रय मूल्य (Selling Price), अंकित मूल्य (Marked Price), लाभ (Profit) और हानि (Loss) केंद्रीय भूमिका निभाते हैं।

- **क्रय मूल्य (CP - Cost Price):** वह निश्चित धन राशि जिस पर किसी वस्तु को खरीदा जाता है अथवा वस्तु को तैयार करने में कुल लागत आती है।
- **विक्रय मूल्य (SP - Selling Price):** वह मूल्य जिस पर वस्तु को ग्राहक को बेचा जाता है।
- **लाभ (Profit):** जब विक्रय मूल्य क्रय मूल्य से अधिक हो (=SP > CP=), तो दोनों का अंतर लाभ कहलाता है।
- **हानि (Loss):** जब क्रय मूल्य विक्रय मूल्य से अधिक हो (=CP > SP=), तो दोनों का अंतर हानि कहलाता है।
HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B"/>
    </marker>
  </defs>
  
  <rect width="800" height="300" fill="#F8FAFC" rx="15"/>
  
  <rect x="50" y="80" width="200" height="120" rx="12" fill="url(#blueGrad)" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"/>
  <text x="150" y="130" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">क्रय मूल्य (CP)</text>
  <text x="150" y="160" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">खरीद लागत</text>

  <path d="M 260 140 L 340 140" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  
  <rect x="350" y="80" width="100" height="120" rx="12" fill="#64748B"/>
  <text x="400" y="145" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">व्यापार</text>

  <path d="M 460 140 L 540 140" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

  <rect x="550" y="80" width="200" height="120" rx="12" fill="url(#tealGrad)" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"/>
  <text x="650" y="130" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">विक्रय मूल्य (SP)</text>
  <text x="650" y="160" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">बिक्री प्राप्ति</text>
</svg>
```

### Section 2 | महत्वपूर्ण सूत्र एवं परिणाम

[flashcards title="लाभ, हानि और छूट के सूत्र"]

| अवधारणा |गणितीय सूत्र |
| लाभ (Profit) |=SP - CP= |
| हानि (Loss) |=CP - SP= |
| लाभ प्रतिशत |=((SP - CP) / CP) \times 100= |
| हानि प्रतिशत |=((CP - SP) / CP) \times 100= |
| विक्रय मूल्य (लाभ पर) |=CP \times \left(1 + \frac{\text{लाभ}%}{100}\right)= |
| विक्रय मूल्य (हानि पर) |=CP \times \left(1 - \frac{\text{हानि}%}{100}\right)= |
| छूट (Discount) |=MP - SP= |
| छूट प्रतिशत |=(\frac{\text{MP} - \text{SP}}{\text{MP}}) \times 100= |
| [/flashcards] | |

[alert type="success"]
**Important Fact:** लाभ या हानि की गणना हमेशा **क्रय मूल्य (CP)** पर की जाती है, जब तक कि प्रश्न में विशेष रूप से विक्रय मूल्य पर गणना करने को न कहा गया हो। वहीं, छूट हमेशा **अंकित मूल्य (MP)** पर दी जाती है।
[/alert]

### Section 3 | हल किए गए उदाहरण

[example]
**Question:** एक दुकानदार किसी वस्तु को 800 रुपये में खरीदता है और उसे 25% के लाभ पर बेचता है। वस्तु का विक्रय मूल्य ज्ञात कीजिए।
**Solution:**
दिया गया है:
क्रय मूल्य (CP) = 800 रुपये
लाभ प्रतिशत = 25%

सूत्रानुसार,
=SP = CP \times \left(1 + \frac{\text{लाभ}%}{100}\right)=
=SP = 800 \times \left(1 + \frac{25}{100}\right)=
=SP = 800 \times \frac{125}{100} = 8 \times 125 = 1000= रुपये।
अतः वस्तु का विक्रय मूल्य **1000 रुपये** है।
[/example]

[example]
**Question:** एक वस्तु का अंकित मूल्य 1200 रुपये है। यदि दुकानदार इस पर 15% की छूट देता है, तो वस्तु का विक्रय मूल्य क्या होगा?
**Solution:**
अंकित मूल्य (MP) = 1200 रुपये
छूट प्रतिशत = 15%

छूट की राशि = =1200 \times \frac{15}{100} = 180= रुपये।
विक्रय मूल्य (SP) = अंकित मूल्य - छूट
=SP = 1200 - 180 = 1020= रुपये।
अतः विक्रय मूल्य **1020 रुपये** होगा।
[/example]

### Section 4 | परीक्षा अभ्यास प्रश्न (Quiz)

[quiz title="लाभ, हानि और छूट - अभ्यास परीक्षा"]
Q: यदि किसी वस्तु का क्रय मूल्य 500 रुपये है और उसे 600 रुपये में बेचा जाता है, तो लाभ प्रतिशत कितना होगा?

- A) 10%
- B) 15%
- C) 20% (Correct: क्योंकि लाभ = 600 - 500 = 100 रुपये, और लाभ% = (100/500) × 100 = 20%)
- D) 25%

Q: एक वस्तु को 20% की छूट पर 720 रुपये में बेचा गया। वस्तु का अंकित मूल्य ज्ञात कीजिए।

- A) 800 रुपये
- B) 900 रुपये (Correct)
- C) 950 रुपये
- D) 1000 रुपये
[/quiz]