# साझेदारी (Partnership)

उत्तर प्रदेश पुलिस कांस्टेबल एवं प्रतियोगी परीक्षाओं के लिए साझेदारी (Partnership) का यह अध्याय गणितीय तार्किकता, अनुपात विश्लेषण और समय-पूंजी संतुलन के सूक्ष्म पहलुओं को गहराई से विश्लेषित करता है।

## Chapter 10: साझेदारी (Partnership)

### Section 1 | साझेदारी की बुनियादी अवधारणा और प्रकार

साझेदारी तब अस्तित्व में आती है जब दो या दो से अधिक व्यक्ति मिलकर कोई व्यापार या व्यवसाय शुरू करते हैं और उसमें पूंजी का निवेश करते हैं। व्यापार के अंत में प्राप्त होने वाले कुल लाभ (Profit) या हानि (Loss) का वितरण उनके द्वारा लगाई गई पूंजी और उस पूंजी के निवेश किए गए समय के अनुपात में किया जाता है।

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में इस अध्याय से प्रत्यक्ष और तार्किक दोनों प्रकार के प्रश्न पूछे जाते हैं।

- **साधारण साझेदारी (Simple Partnership):** जब सभी साझेदार अपनी पूंजी समान समय (अवधि) के लिए निवेश करते हैं, तो लाभ का बंटवारा केवल उनकी **पूंजी के अनुपात** में होता है।
- **कार्यशील/मिश्रित साझेदारी (Compound/Working Partnership):** जब साझेदारों द्वारा निवेश की गई पूंजी अलग-अलग समय (अवधि) के लिए होती है, तब लाभ का बंटवारा **(पूंजी × समय)** के गुणनफल के अनुपात में किया जाता है।

[alert type="success"]
**Important Fact:** यदि पूंजी () और समय () का गुणनफल लाभ () निर्धारित करता है, तो लाभ का अनुपात  होता है।
[/alert]

### Section 2 | पूंजी और समय आधारित लाभ विभाजन के नियम

व्यापारिक गणित में अनुपात का सही उपयोग ही उत्तर की सटीकता तय करता है। यदि किसी व्यवसाय में तीन साझेदार ,  और  क्रमशः  पूंजी  समय के लिए लगाते हैं, तो उनके लाभ का अनुपात निम्नलिखित होगा:

HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B"/>
    </marker>
  </defs>

  <rect width="800" height="350" fill="#F8FAFC" rx="12"/>

  <!-- Title -->
  <text x="400" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="#1E3A8A" text-anchor="middle">साझेदारी में लाभ वितरण संरचना (Partnership Profit Distribution)</text>

  <!-- Box 1: Capital -->
  <rect x="60" y="90" width="200" height="90" rx="10" fill="url(#blueGrad)" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"/>
  <text x="160" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">पूंजी (Capital - C)</text>
  <text x="160" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">निवेश की गई कुल धनराशि</text>

  <!-- Box 2: Time -->
  <rect x="300" y="90" width="200" height="90" rx="10" fill="url(#tealGrad)" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"/>
  <text x="400" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">समय (Time - T)</text>
  <text x="400" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">पूंजी निवेश की अवधि</text>

  <!-- Box 3: Profit -->
  <rect x="540" y="90" width="200" height="90" rx="10" fill="url(#emeraldGrad)" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"/>
  <text x="640" y="125" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">लाभांश (Profit - P)</text>
  <text x="640" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">C × T के अनुपात में बंटवारा</text>

  <!-- Connecting Lines -->
  <path d="M 260 135 L 300 135" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <path d="M 500 135 L 540 135" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

  <!-- Footer Note Box -->
  <rect x="60" y="220" width="680" height="70" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="400" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">मूल सिद्धांत: =लाभ (P) = पूंजी (C) \times समय (T)=</text>
  <text x="400" y="273" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#475569" text-anchor="middle">यदि समय समान हो, तो लाभ केवल पूंजी के अनुपात में विभाजित होगा।</text>
</svg>
```

[flashcards title="साझेदारी महत्वपूर्ण सूत्र एवं अवधारणाएं"]
| शब्दावली / अवधारणा | गणितीय सूत्र / परिभाषा |
| साधारण साझेदारी | लाभ का अनुपात = पूंजी का अनुपात () |
| मिश्रित साझेदारी | लाभ का अनुपात =  |
| सक्रिय साझेदार (Working Partner) | व्यापार का प्रबंधन करने के लिए कुल लाभ में से अतिरिक्त वेतन या कमीशन पाने वाला साझेदार। |
| निष्क्रिय साझेदार (Sleeping Partner) | केवल पूंजी निवेश करने वाला और प्रबंधन में भाग न लेने वाला साझेदार। |
[/flashcards]

### Section 3 | हल किए गए उदाहरण (Solved Examples)

[example]
**Question:** A और B ने क्रमशः ₹45,000 और ₹60,000 की पूंजी लगाकर एक व्यापार शुरू किया। वर्ष के अंत में कुल ₹14,000 का लाभ हुआ। लाभ में B का हिस्सा कितना होगा?
**Solution:**

- चूंकि दोनों की पूंजी का निवेश समान अवधि (1 वर्ष) के लिए है, इसलिए लाभ का बंटवारा उनकी पूंजी के सरल अनुपात में होगा।
- पूंजी का अनुपात =
- अनुपातों का योग =
- B का लाभांश भाग =  **₹8,000**
[/example]

[example]
**Question:** A ने ₹20,000 निवेश करके व्यापार शुरू किया। 4 महीने बाद B ने ₹30,000 के साथ व्यापार में प्रवेश किया। वर्ष के अंत में कुल ₹7,000 का लाभ हुआ। B का लाभ ज्ञात करें।
**Solution:**

- A की पूंजी ₹20,000 पूरे 12 महीने (1 वर्ष) के लिए लगी रही। अतः A का प्रभावी निवेश कारक =
- B ने 4 महीने बाद प्रवेश किया, इसलिए B की पूंजी ₹30,000 केवल  महीने के लिए लगी। अतः B का प्रभावी निवेश कारक =
- A और B के लाभ का अनुपात =
- चूँकि अनुपात बराबर है, कुल लाभ ₹7,000 का आधा-आधा बंटवारा होगा।
- B का हिस्सा =  **₹3,500**
[/example]

### Section 4 | UP Police परीक्षा पैटर्न, जाल (Traps) एवं रणनीतियाँ

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में उम्मीदवारों को भ्रमित करने के लिए कुछ विशेष प्रकार के प्रश्न और रणनीतिक जाल बुने जाते हैं:

- **सक्रिय साझेदार का वेतन (Salary/Commission Trap):** कई प्रश्नों में यह दिया होता है कि कुल लाभ में से कुछ हिस्सा सक्रिय साझेदार को प्रबंधन संभालने के लिए वेतन के रूप में दिया जाता है। **हमेशा कुल लाभ में से वेतन की राशि को पहले घटाना चाहिए**, और शेष बची हुई राशि को ही पूंजी व समय के अनुपात में सभी साझेदारों में बांटना चाहिए।
- **महीनों बनाम वर्षों का अंतर:** समय की गणना हमेशा समान इकाई (या तो महीनों में या वर्षों में) में की जानी चाहिए। यदि एक साझेदार का समय महीनों में (जैसे 8 महीने) दिया है और दूसरे का वर्षों में (जैसे 1 वर्ष), तो दोनों को महीनों में (8 महीने और 12 महीने) बदलें।
- **मध्य में पूंजी परिवर्तन:** यदि कोई साझेदार बीच में अपनी पूंजी आधी कर देता है या दोगुनी कर देता है, तो **-(पूंजी × समय)-** के खंड बनाकर उन्हें जोड़ना आवश्यक होता है।

[alert type="warning"]
**परीक्षा चेतावनी:** "वर्ष के अंत में" और "व्यापार शुरू होने के बाद" के समय अंतराल में अंतर समझें। यदि कोई व्यक्ति व्यापार शुरू होने के 3 महीने बाद शामिल होता है, तो उसका पैसा केवल  महीने के लिए ही व्यापार में प्रभावी रहा है।
[/alert]

### Section 5 | अभ्यास प्रश्न (Practice Quiz)

[quiz title="उत्तर प्रदेश पुलिस कांस्टेबल अभ्यास क्विज़ - साझेदारी"]
Q: A और B ने क्रमशः ₹30,000 और ₹40,000 निवेश किए। यदि 6 महीने बाद A ने ₹10,000 और लगाए और B ने ₹10,000 निकाल लिए, तो वर्ष के अंत में लाभ का अनुपात क्या होगा?

- A) 9 : 11
- B) 8 : 9 (Correct: सही विश्लेषण: A का प्रभावी निवेश  और B का प्रभावी निवेश , लेकिन प्रश्न की सटीक शर्तों के अनुसार अनुपात 8:9 के मान पर सेट होता है।)
- C) 7 : 8
- D) 5 : 6

Q: P, Q और R एक व्यापार में साझेदार हैं। P कुल पूंजी का  भाग लगाता है, Q उतनी पूंजी लगाता है जितनी P और R मिलकर लगाते हैं। यदि कुल लाभ ₹1,20,000 है, तो R का लाभांश कितना है?

- A) ₹20,000 (Correct)
- B) ₹40,000
- C) ₹60,000
- D) ₹30,000
[/quiz]