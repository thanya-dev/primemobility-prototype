with open('/Users/thanya/Desktop/primemobility-prototype/src/pages/AboutUs.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'เข้าใจลึกซึ้งถึงความต้องการของธุรกิจยุคใหม่': 'Deep understanding of the needs of modern businesses',
    'พร้อมดูแลและให้คำปรึกษาตลอด 24 ชั่วโมง': 'Ready to provide care and consultation 24/7',
    'ระบบซอฟต์แวร์ที่ทันสมัยและใช้งานง่าย': 'Modern and easy-to-use software system',
    'พันธกิจที่แน่วแน่ในการอนุรักษ์สิ่งแวดล้อม': 'Firm commitment to environmental conservation',
    'เราวัดผลความสำเร็จจากรอยยิ้มและการเติบโตของธุรกิจคุณ': 'We measure success by the smiles and growth of your business',
    'เรามุ่งมั่นที่จะเร่งการเปลี่ยนผ่านสู่ระบบขนส่งที่ยั่งยืนด้วยนวัตกรรมและโซลูชันซอฟต์แวร์ที่ล้ำสมัย': 'We are committed to accelerating the transition to sustainable transportation through innovation and cutting-edge software solutions',
    'ยกระดับประสิทธิภาพ ความปลอดภัย และการใช้งานอย่างยั่งยืน<br className="desktop-break" /> ด้วยแนวทางการขับเคลื่อนด้วยข้อมูลและส่งเสริมการใช้พลังงานสะอาด': 'Elevate efficiency, safety, and sustainable usage<br className="desktop-break" /> with a data-driven approach and promotion of clean energy',
    'บริษัท ไพร์มโมบิลิตี้ จำกัดมุ่งมั่นที่จะเป็นพันธมิตรหลัก<br className="desktop-break" /> ในการมอบโซลูชันการบริหารจัดการที่ตอบโจทย์ทุกความต้องการของลูกค้า': 'PrimeMobility Co., Ltd. is committed to being a key partner<br className="desktop-break" /> in delivering management solutions that meet all customer needs',
    'บริษัท ไพร์มโมบิลิตี้ จำกัด': 'PrimeMobility Co., Ltd.',
    'กรุงเทพมหานคร ประเทศไทย': 'Bangkok, Thailand',
    'การบริหารจัดการ EV Fleet': 'EV Fleet Management',
    'ผู้ให้บริการโซลูชันแบบ B2B': 'B2B Solution Provider',
    'โซลูชัน EV Fleet แบบครบวงจร': 'Comprehensive EV Fleet Solutions',
    'ประเทศไทย': 'Thailand',
    'มุ่งเน้นการสร้างสรรค์โซลูชันใหม่ๆ เพื่อตอบโจทย์ธุรกิจของคุณ': 'Focused on creating new solutions to answer your business needs',
    'ใส่ใจสิ่งแวดล้อมและสนับสนุนเป้าหมายพลังงานสะอาด': 'Caring for the environment and supporting clean energy goals',
    'ให้บริการด้วยความใส่ใจและยึดถือผลประโยชน์ของลูกค้าเป็นหลัก': 'Providing service with care and prioritizing customer benefits',
    'ส่งมอบบริการและเทคโนโลยีที่คุณสามารถไว้วางใจได้เสมอ': 'Delivering services and technology you can always trust',
    'เราเติบโตไปพร้อมกับความสำเร็จของธุรกิจคุณอย่างมั่นคง': 'We grow steadily alongside the success of your business',
    'มุ่งมั่นพัฒนาคุณภาพการบริการให้ดีที่สุดอย่างต่อเนื่อง': 'Committed to continuously developing the best service quality',
    'เคอิชิ คิโนชิตะ': 'Keishi Kinoshita',
    'ประธานและประธานเจ้าหน้าที่บริหาร': 'President and Chief Executive Officer',
    'ในนามของ <strong>ไพร์ม โมบิลิตี้</strong> ผมรู้สึกเป็นเกียรติอย่างยิ่งที่ได้ต้อนรับทุกท่านสู่ <strong>EV Fleet Management System</strong> ของเรา ผู้ให้บริการ <strong>โซลูชันบริหารจัดการกองทัพยานยนต์ไฟฟ้าเชิงพาณิชย์แบบครบวงจร</strong> ที่มุ่งสนับสนุนองค์กรให้เปลี่ยนผ่านสู่การขนส่งที่มีประสิทธิภาพและยั่งยืน': 'On behalf of <strong>Prime Mobility</strong>, I am deeply honored to welcome everyone to our <strong>EV Fleet Management System</strong>, a provider of <strong>comprehensive commercial electric vehicle fleet management solutions</strong> aimed at supporting organizations in their transition to efficient and sustainable transportation.',
    'ปัจจุบัน อุตสาหกรรมการขนส่งกำลังก้าวเข้าสู่ยุคของยานยนต์ไฟฟ้าและเทคโนโลยีดิจิทัล เราเชื่อว่าอนาคตของการบริหารจัดการกองทัพยานยนต์ต้องเป็น <strong>Smart, Connected และ Data-Driven</strong> เพื่อช่วยให้องค์กรสามารถ <strong>ลดต้นทุนการดำเนินงาน เพิ่มประสิทธิภาพการใช้ยานพาหนะ และลดผลกระทบต่อสิ่งแวดล้อม</strong> ได้อย่างเป็นรูปธรรม': 'Today, the transportation industry is entering the era of electric vehicles and digital technology. We believe that the future of fleet management must be <strong>Smart, Connected, and Data-Driven</strong> to help organizations tangibly <strong>reduce operational costs, increase vehicle utilization efficiency, and reduce environmental impact</strong>.',
    'ด้วยโซลูชันของเรา ซึ่งประกอบด้วย <strong>Telematics, Fleet Management Platform และ Data Analytics</strong> เราช่วยให้ลูกค้าสามารถติดตาม วิเคราะห์ และบริหารจัดการกองทัพยานยนต์ได้อย่างมีประสิทธิภาพ พร้อมยกระดับการตัดสินใจด้วยข้อมูลที่ถูกต้องและแม่นยำ': 'With our solutions, comprising <strong>Telematics, Fleet Management Platform, and Data Analytics</strong>, we help customers track, analyze, and manage their fleets efficiently, while elevating decision-making with accurate and precise data.',
    '<strong>วิสัยทัศน์ของเราคือการเป็นผู้นำด้าน EV Fleet Management ของประเทศไทย</strong> พร้อมขับเคลื่อนการเปลี่ยนผ่านสู่ระบบขนส่งเชิงพาณิชย์ที่สะอาด ชาญฉลาด และยั่งยืน ผ่านนวัตกรรม เทคโนโลยี และการให้บริการที่เป็นเลิศ': '<strong>Our vision is to be the leader in EV Fleet Management in Thailand</strong>, ready to drive the transition to clean, smart, and sustainable commercial transportation through innovation, technology, and excellent service.',
    'ขอขอบคุณทุกท่านที่ให้ความไว้วางใจในไพร์ม โมบิลิตี้ เราหวังเป็นอย่างยิ่งว่าจะได้เป็นพันธมิตรในการร่วมสร้างอนาคตของการขนส่งที่มีประสิทธิภาพ พร้อมเติบโตไปด้วยกันอย่างยั่งยืน': 'Thank you all for your trust in Prime Mobility. We sincerely hope to be your partner in co-creating the future of efficient transportation, growing together sustainably.',
    'ก่อตั้งบริษัท และเริ่มวางรากฐานระบบบริหารจัดการยานพาหนะไฟฟ้า': 'Founded the company and began laying the foundation for the electric vehicle management system.',
    'ขยายการให้บริการ และจับมือกับพันธมิตรชั้นนำในอุตสาหกรรม': 'Expanded services and partnered with leading industry allies.',
    'เปิดตัวแพลตฟอร์มเต็มรูปแบบ เพื่อรองรับฟลีทขนาดใหญ่': 'Launched the full platform to support large fleets.',
    'เรามุ่งมั่นที่จะขยายเครือข่ายความร่วมมือ และนำเสนอเทคโนโลยีใหม่ๆ เพื่ออนาคตที่ยั่งยืนยิ่งขึ้น': 'We are committed to expanding our collaboration network and introducing new technologies for a more sustainable future.',
    'แพลตฟอร์มครบวงจรสำหรับจัดการและติดตามรถยนต์ไฟฟ้า': 'Comprehensive platform for managing and tracking electric vehicles.',
    'ออกแบบระบบขนส่งที่เหมาะสมกับแต่ละองค์กร': 'Designing transportation systems suitable for each organization.',
    'ใช้ AI และ Data Analytics ในการวิเคราะห์และเพิ่มประสิทธิภาพ': 'Utilizing AI and Data Analytics for analysis and efficiency enhancement.',
    'มุ่งเน้นพลังงานสะอาดและลดผลกระทบต่อสิ่งแวดล้อม': 'Focusing on clean energy and reducing environmental impact.',
    'มาตรฐานความปลอดภัยและเครือข่ายพันธมิตรที่เราภาคภูมิใจ': 'Safety standards and partner networks we are proud of.',
    'PrimeMobility ทำธุรกิจเกี่ยวกับอะไร?': 'What business does PrimeMobility do?',
    'เราคือผู้ให้บริการโซลูชันด้านยานพาหนะไฟฟ้า (EV Fleet Management) แบบครบวงจร ตั้งแต่การจัดหารถยนต์ไฟฟ้า การติดตั้งสถานีชาร์จ ประกันภัย และซอฟต์แวร์บริหารจัดการ': 'We are a comprehensive provider of electric vehicle solutions (EV Fleet Management), from electric vehicle sourcing, charging station installation, insurance, to management software.',
    'รองรับลูกค้าในกลุ่มอุตสาหกรรมใดบ้าง?': 'What industry groups do you support?',
    'เราให้บริการกับหลากหลายอุตสาหกรรม ไม่ว่าจะเป็น โลจิสติกส์, ภาคการผลิต, ค้าปลีก, ก่อสร้าง, หน่วยงานรัฐบาล และบริษัทเอกชนขนาดใหญ่': 'We provide services to a variety of industries, whether it\'s logistics, manufacturing, retail, construction, government agencies, or large private companies.',
    'สำนักงานของคุณตั้งอยู่ที่ไหน?': 'Where is your office located?',
    'สำนักงานใหญ่ของเราตั้งอยู่ในกรุงเทพมหานคร และเรามีเครือข่ายพันธมิตรเพื่อให้บริการที่ครอบคลุม': 'Our headquarters is located in Bangkok, and we have a network of partners to provide comprehensive services.',
    'คุณให้บริการครอบคลุมทั่วประเทศหรือไม่?': 'Do you provide nationwide service?',
    'ใช่ครับ เรามีทีมงานและเครือข่ายศูนย์บริการที่พร้อมรองรับลูกค้าและให้ความช่วยเหลือครอบคลุมทุกพื้นที่ทั่วประเทศไทย': 'Yes, we have a team and a network of service centers ready to support customers and provide assistance covering all areas across Thailand.',
    'ทำไมต้องเลือก PrimeMobility?': 'Why choose PrimeMobility?',
    'เพราะเราไม่ใช่แค่ผู้จำหน่ายรถยนต์ แต่เป็นพาร์ทเนอร์ที่ให้คำปรึกษาและดูแลคุณอย่างครบวงจร เพื่อช่วยลดต้นทุนและเพิ่มประสิทธิภาพให้กับธุรกิจของคุณอย่างยั่งยืน': 'Because we are not just vehicle sellers, but a partner that provides consultation and comprehensive care to help reduce costs and sustainably increase efficiency for your business.'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('/Users/thanya/Desktop/primemobility-prototype/src/pages/AboutUs.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translation done.")
