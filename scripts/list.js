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
        "score": "29",
    },
    {
        "name": "Bikaev Magomed",
        "score": "25",
    },
    {
        "name": "Aliev Askhab",
        "score": "32",
    },
    {
        "name": "Aliev Amir",
        "score": "33",
    },
    //ADELE
    {
        "name": "Gizzatullina Samira",
        "score": "00",
    },
    {
        "name": "Shangareeva Samira",
        "score": "00",
    },
    {
        "name": "Kanibekov Samaridin",
        "score": "10",
    },
    {
        "name": "Lubimov Maxim",
        "score": "10",
    },
    {
        "name": "Raskita Timur",
        "score": "10",
    },
    {
        "name": "Khusainov Musa",
        "score": "10",
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

document.getElementById('A16').innerHTML = list[16].score;
document.getElementById('A17').innerHTML = list[17].score;
document.getElementById('A18').innerHTML = list[18].score;
document.getElementById('A19').innerHTML = list[19].score;
document.getElementById('A20').innerHTML = list[20].score;
document.getElementById('A21').innerHTML = list[21].score;



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

document.getElementById('A16-P').setAttribute("Data-Value", list[16].score);
document.getElementById('A17-P').setAttribute("Data-Value", list[17].score);
document.getElementById('A18-P').setAttribute("Data-Value", list[18].score);
document.getElementById('A19-P').setAttribute("Data-Value", list[19].score);
document.getElementById('A20-P').setAttribute("Data-Value", list[20].score);
document.getElementById('A21-P').setAttribute("Data-Value", list[21].score);

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