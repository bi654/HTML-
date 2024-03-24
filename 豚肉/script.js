// script.js
const porkDetails = {
    'loin': 'ロース：背中側に位置し、適度な脂肪と柔らかい肉質が特徴です。トンカツやステーキに適しています。',
    'belly': 'バラ：腹部に位置し、脂肪と赤身が層状になっています。焼肉や煮込み料理に適しています。',
    'fillet': 'ヒレ：非常に柔らかく、脂肪が少ない部位です。ヒレカツやステーキに適しています。',
    'shoulder-loin': '肩ロース：肩の部分で、適度な脂肪と筋肉のバランスが特徴です。ローストポークやシチューに適しています。',
    'leg': 'もも：後ろ足の部分で、赤身が多く、しっかりした食感が特徴です。ハムやソーセージの原料として使用されます。',
    'foot': '豚足：足の部分で、コラーゲンが豊富です。煮込み料理やスープに適しています。',
    'toro': '豚トロ：頬下部から首の脂身の肉。',
    'tongue': 'タン：舌。牛タンに比べて価格が安い。',
    'heart': 'ハツ：心臓。',
    'liver': 'レバー：肝臓。',
    'esophagus': 'シキン：食道。',
    'cartilage': 'ナンコツ：気管や声帯、肺動脈、肺静脈の総称。',
    'lung': 'フワ：肺。',
    'diaphragm': 'ハラミ：横隔膜。',
    'thymus': 'シビレ：胸腺と膵臓。',
    'spleen': 'チレ：脾臓。',
    'udder': 'オッパイ：乳房。',
    'kidney': 'マメ：腎臓。',
    'stomach': 'ガツ：胃。',
    'intestines': 'モツ、ホルモン：腸。',
    'small-large-intestine': 'シロ：小腸と大腸。',
    'rectum': 'テッポウ：直腸。',
    'anus': 'ドテ：肛門。',
    'penis': 'キンツル：陰茎の筋肉。',
    'uterus': 'コブクロ：子宮。',
    'testicles': 'ホーデン：睾丸。',
    'shin': '豚スネ：足のうち足首から上の部分。',
    'pork-feet': '豚足：足のうち足首から下の部分。前足と後ろ足で異なる。',
    'skin': '表皮：頭部の表皮を「チラグヮー」として食用にする。',
    'sujimeat': 'すじ肉：ロースと背脂の間の薄い膜。',
    'soft-cartilage': '軟骨：適度な歯ごたえと脂がある。',
    'blood': '血液：塩で固めた血や炒め物に利用。'
};

document.getElementById('pork-parts').addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        const partId = event.target.id;
        const detail = porkDetails[partId] || '詳細情報がありません。';
        alert(detail);
    }
});
