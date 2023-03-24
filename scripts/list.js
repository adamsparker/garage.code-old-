var list = [
    {
        "name": "0",
        "score": "0",
    },
    {
        "name": "Khasuev Aslam",
        "score": "319",
    },
    {
        "name": "Dadaev Deni",
        "score": "149",
    },
    {
        "name": "Ulubaev Aslan",
        "score": "74",
    },
    {
        "name": "Dagaev Khamzat",
        "score": "135",
    },
    {
        "name": "Tagaev Muslim",
        "score": "183",
    },
    {
        "name": "Vitagrov Akhmed",
        "score": "144",
    },
    {
        "name": "Istamulova Eset",
        "score": "56",
    },
    {
        "name": "Hizriev Umar",
        "score": "85",
    },
    {
        "name": "Umarov Zaur",
        "score": "25",
    },
    {
        "name": "Baisultanov Muslim",
        "score": "25",
    },
    {
        "name": "Usuphadjiev Bai-Eli",
        "score": "88",
    },
    {
        "name": "Takaev Damir",
        "score": "00",
    },
    {
        "name": "Bikaev Magomed",
        "score": "NA",
    },
    {
        "name": "Aliev Askhab",
        "score": "NA",
    },
    {
        "name": "Aliev Amir",
        "score": "33",
    },
]

document.getElementById('G1').innerHTML = list[1].score;
document.getElementById('G2').innerHTML = list[2].score;
document.getElementById('G3').innerHTML = list[3].score;
document.getElementById('G4').innerHTML = list[4].score;
document.getElementById('G5').innerHTML = list[5].score;
document.getElementById('G6').innerHTML = list[6].score;
document.getElementById('G7').innerHTML = list[7].score;
document.getElementById('G8').innerHTML = list[8].score;
document.getElementById('G9').innerHTML = list[9].score;
document.getElementById('G10').innerHTML = list[10].score;
document.getElementById('G11').innerHTML = list[11].score;
document.getElementById('G12').innerHTML = list[12].score;
document.getElementById('G13').innerHTML = list[13].score;
document.getElementById('G14').innerHTML = list[14].score;
document.getElementById('G15').innerHTML = list[15].score;

document.getElementById('G1-P').setAttribute("Data-Value", list[1].score);
document.getElementById('G2-P').setAttribute("Data-Value", list[2].score);
document.getElementById('G3-P').setAttribute("Data-Value", list[3].score);
document.getElementById('G4-P').setAttribute("Data-Value", list[4].score);
document.getElementById('G5-P').setAttribute("Data-Value", list[5].score);
document.getElementById('G6-P').setAttribute("Data-Value", list[6].score);
document.getElementById('G7-P').setAttribute("Data-Value", list[7].score);
document.getElementById('G8-P').setAttribute("Data-Value", list[8].score);
document.getElementById('G9-P').setAttribute("Data-Value", list[9].score);
document.getElementById('G10-P').setAttribute("Data-Value", list[10].score);
document.getElementById('G11-P').setAttribute("Data-Value", list[11].score);
document.getElementById('G12-P').setAttribute("Data-Value", list[12].score);
document.getElementById('G13-P').setAttribute("Data-Value", list[13].score);
document.getElementById('G14-P').setAttribute("Data-Value", list[14].score);
document.getElementById('G15-P').setAttribute("Data-Value", list[15].score);

window.addEventListener('load', function() {

    const section = document.querySelector('#garage-section');
    const sortedDivs = document.createElement('div');
    const divs = [...section.querySelectorAll('.link-archive__inner')];

    divs.sort((a, b) => b.getAttribute('data-value') - a.getAttribute('data-value'));
    divs.forEach(div => {
        sortedDivs.appendChild(div);
    });

    section.appendChild(sortedDivs);
    });