
function findZodiac() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    if (!birthdate.getTime()) {
        document.getElementById('zodiacResult').innerText = '有効な日付を入力してください。';
        return;
    }

    const zodiacs = [
        { sign: "山羊座", start: "01-01", end: "01-19" },
        { sign: "水瓶座", start: "01-20", end: "02-18" },
        { sign: "魚座", start: "02-19", end: "03-20" },
        { sign: "牡羊座", start: "03-21", end: "04-19" },
        { sign: "牡牛座", start: "04-20", end: "05-20" },
        { sign: "双子座", start: "05-21", end: "06-21" },
        { sign: "蟹座", start: "06-22", end: "07-22" },
        { sign: "獅子座", start: "07-23", end: "08-22" },
        { sign: "乙女座", start: "08-23", end: "09-22" },
        { sign: "天秤座", start: "09-23", end: "10-23" },
        { sign: "蠍座", start: "10-24", end: "11-21" },
        { sign: "射手座", start: "11-22", end: "12-21" },
        { sign: "山羊座", start: "12-22", end: "12-31" }
    ];

    const zodiac = zodiacs.find(z => {
        let start = new Date(birthdate.getFullYear(), new Date(z.start).getMonth(), new Date(z.start).getDate());
        let end = new Date(birthdate.getFullYear(), new Date(z.end).getMonth(), new Date(z.end).getDate());
        if (end < start) end.setFullYear(end.getFullYear() + 1);
        return birthdate >= start && birthdate <= end;
    });

    if (zodiac) {
        document.getElementById('zodiacResult').innerText = `あなたの星座は${zodiac.sign}です。`;
    } else {
        document.getElementById('zodiacResult').innerText = '星座が見つかりませんでした。';
    }
}
