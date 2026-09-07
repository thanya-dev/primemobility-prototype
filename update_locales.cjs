const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src', 'locales', 'en.json');
const thPath = path.join(__dirname, 'src', 'locales', 'th.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const thData = JSON.parse(fs.readFileSync(thPath, 'utf8'));

const mappings = {
  "END-TO-END COMMERCIAL EV FLEET SOLUTIONS": "โซลูชันยานยนต์ไฟฟ้าเชิงพาณิชย์แบบครบวงจร",
  "Accelerate Your Business into a Sustainable Future": "ขับเคลื่อนธุรกิจของคุณสู่อนาคตที่ยั่งยืน",
  "Transform your business with end-to-end EV fleet solutions that reduce costs, improve efficiency, and enable cleaner mobility.": "ยกระดับธุรกิจด้วยโซลูชัน EV Fleet ครบวงจร ลดต้นทุน เพิ่มประสิทธิภาพ และขับเคลื่อนสู่พลังงานสะอาดอย่างมั่นใจ",
  "Talk to Our Experts": "ปรึกษาผู้เชี่ยวชาญของเรา",
  "Explore Our Solutions": "ดูโซลูชันของเรา",
  "Reduce operating costs": "ลดต้นทุนการดำเนินงาน",
  "Improve fleet efficiency": "บริหาร Fleet อย่างมีประสิทธิภาพ",
  "Reduce carbon emissions": "ลดการปล่อยคาร์บอน",
  "PrimeMobility commercial electric truck driving on a road in Bangkok": "รถบรรทุกไฟฟ้าเชิงพาณิชย์ของ PrimeMobility กำลังขับบนถนนในกรุงเทพฯ"
};

for (const [enKey, thText] of Object.entries(mappings)) {
  enData.translation[enKey] = enKey;
  thData.translation[enKey] = thText;
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
fs.writeFileSync(thPath, JSON.stringify(thData, null, 2), 'utf8');

console.log('Locales updated');
