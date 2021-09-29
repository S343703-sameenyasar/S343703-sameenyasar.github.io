function calcScore(){

    event.preventDefault();
    
    let score=0;

    let Q1 = document.querySelector('input[name="Q1"]:checked').value;
    let Q2 = document.querySelector('input[name="Q2"]').value;
    //let Q2 = document.getElementsByName("Q2").value;
    let Q3 = document.querySelector('input[name="Q3"]:checked').value;
    let Q4 = document.querySelector('input[name="Q4"]:checked').value;
    let Q5 = document.querySelector('input[name="Q5"]:checked').value;
    Q1=parseFloat(Q1);
    Q2=parseFloat(Q2);
    Q3=parseFloat(Q3);
    Q4=parseFloat(Q4);
    Q5=parseFloat(Q5);
    score=(Q1+Q2+Q3+Q4+Q5)/5;
    console.log(score);

    document.getElementById("result").hidden=false;
    document.getElementById("result-score").innerHTML=score;

    if(score<=4){
        document.getElementById("result-advice").innerHTML="You might want to get some professional advice.";
        document.getElementById("result-contact").hidden=false;
        document.getElementById("result-contact").innerHTML="Dr. John";
        document.getElementById("result-contact-number").hidden=false;
        document.getElementById("result-contact-number").innerHTML="061-559-8224";
    }

    else if(score>4 && score <8){
        document.getElementById("result-advice").innerHTML="Sometimes it is better to take a break!";
    }

    else {
        document.getElementById("result-advice").innerHTML="You are doing great!";
    }

    return score;

}
