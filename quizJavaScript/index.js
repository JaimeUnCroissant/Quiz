class QuestionWithRadio
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie '+QuestionNumber_+' (Radio)</legend><span class="Question">'+Question+'</span><div class="Answer"><label style="cursor: pointer;"> ' + AnswerA + ' <input type="radio" checked value="A"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;"> '+AnswerB+'<input type="radio" value="B"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;">'+AnswerC+'<input type="radio" value="C" name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer">'+AnswerD+'<input type="radio" value="D"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div> </fieldset>';

        this.CorectAnswer = CorectAnswer;
        
        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckRadioQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Radio"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}

class QuestionWithCheckBoxs
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswers)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie '+QuestionNumber_+' (CheckBox)</legend><span class="Question">'+Question+'</span><div class="Answer"><label style="cursor: pointer;"> ' + AnswerA + ' <input value="A" type="checkbox"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;"> '+AnswerB+'<input type="checkbox" value="B"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer;">'+AnswerC+'<input type="checkbox" value="C"  name="RadioButton" class="RadioButtonAndCheckBox"></label></div><div class="Answer"><label style="cursor: pointer">'+AnswerD+'<input type="checkbox" value="D" name="RadioButton" class="RadioButtonAndCheckBox"></label></div></fieldset>';

        this.CorectAnswer = CorectAnswers;

        this.Question_ = Question

        this.MaxPoints = 2

        this.Check = () =>
        {
            var empty = CheckCheckBoxQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "CheckBox"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}

class QuestionWithSelect
{
    constructor(Question, QuestionNumber_, AnswerA, AnswerB, AnswerC, AnswerD, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie ' + QuestionNumber_ + '</legend><span class="Question">' + Question + '</span><select class="SelectQuestion"><option class="SelectOption" value="A" selected>A : ' + AnswerA + '</option><option class="SelectOption" value="B">B : ' + AnswerB + '</option><option class="SelectOption" value="C">C : ' + AnswerC + '</option><option class="SelectOption" value="D">D : ' + AnswerD + '</option></select></fieldset>';

        this.CorectAnswer = CorectAnswer;

        this.Question_ = Question

        this.MaxPoints = 1

        this.Check = () =>
        {
            var empty = CheckSelectQuestio(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Select"

        this.AnswerA = AnswerA

        this.AnswerB = AnswerB

        this.AnswerC = AnswerC

        this.AnswerD = AnswerD
    }
}
class QuestionWithText
{
    constructor(Question, QuestionNumber_, CorectAnswer)
    {
        this.QuestionContent = '<fieldset class="QuestionFieldset"> <legend>Pytanie ' + QuestionNumber_ + '</legend><span class="Question">' + Question + '</span><input type="text" maxlength="23" class="TextQuestion"></fieldset>';

        this.CorectAnswer = CorectAnswer;

        this.Question_ = Question

        this.MaxPoints = 2

        this.Check = () =>
        {
            var empty = CheckTextQuestion(this.CorectAnswer)
            return empty
        }

        this.QuestionType = "Text"
    }
}

var QuestionNumber = 0;

let MaxPoints = 0;

var Name = ""

const HowManyQuestions = 21;

var Points = new Array(HowManyQuestions);

var UserAnswerwers = new Array(HowManyQuestions);

var CorectAnswers_ = new Array(HowManyQuestions);

var Questions = new Array(HowManyQuestions);

const QuestionDiv = document.querySelector("#QuestionHolder")

var WriteNameInput = true;

var ImBack = false;

const QuestionNumber1 = new QuestionWithCheckBoxs("Jakie mamy p??tle w Java Script", "1", "for", "for do", "while", "do while", "A, C, D");

MaxPoints += 2

CorectAnswers_ [0] = "A, C, D"

Questions[0] = QuestionNumber1

const QuestionNumber2 = new QuestionWithRadio("Jakiej funkcji trzeba u??y?? aby zamienic liczb?? na binarn??", "2", "ToString(2)", "ToBinary()", "toString(2)", "toBinary()", "C");

MaxPoints += 1

CorectAnswers_ [1] = "C"

Questions[1] = QuestionNumber2

const QuestionNumber3 = new QuestionWithSelect('Co to zrobi <br>var Tak = document.querySelector(".Tak")', 3, "do zmiennej Tak zapisze element o klasie Tak", "do zmiennej Tak zapisze element o id Tak", "do zmiennej Tak zapisze element o atrybucie name = Tak", "do zmiennej Tak zapisze element o id = Tak oraz klasie = Tak", "A");

MaxPoints += 1

CorectAnswers_ [2] = "A"

Questions[2] = QuestionNumber3

const QuestionNumber4 = new QuestionWithText('Napisz kod w kt??rym nie u??ywaj??c ??adnych zmiennych oraz znak??w bia??ych wy??wietlisz w alercie napis "jeste?? menem"', 4, 'alert("jeste?? menem")!alert(\'jeste?? menem\')!alert("jeste?? menem");!alert(\'jeste?? menem\');');

MaxPoints += 2

CorectAnswers_ [3] = 'alert("jeste?? menem")'

Questions[3] = QuestionNumber4

const QuestionNumber5 = new QuestionWithRadio("Jakich tagu trzeba u??y?? wewn??trz html aby u??y?? java scriptu?", "5", "&#60;js&#62;", "&#60;script&#62;", "&#60;JavaScript&#62;", "&#60;scripting&#62;", "B");

MaxPoints += 1

CorectAnswers_ [4] = "B"

Questions[4] = QuestionNumber5

const QuestionNumber6 = new QuestionWithCheckBoxs("Jakie stworzy?? funkcj?? w JavaScript ?", "6", "&#102;unction MojaFunkcja(){}", "public void MojaFunkcja(){}", "var MojaFunkcja = (&#41; => {}", "def MojaFunkcja:", "A, C");

MaxPoints += 2

CorectAnswers_ [5] = "A, C"

Questions[5] = QuestionNumber6

const QuestionNumber7 = new QuestionWithRadio("jak zapisac ifa w JavaScript", "7", "if(a > b){alert('a jest wi??ksze')}", "if a > b {alert('a jest wi??ksze')}", "if a > b alert('a jest wi??ksze')", "if else (a > b){alert('a jest wi??ksze\")}", "A");

MaxPoints += 1

CorectAnswers_ [6] = "A"

Questions[6] = QuestionNumber7

const QuestionNumber8 = new QuestionWithRadio("jak wywo??a?? funkcje w JavaScript ?", "8", "MojaFunkcja()", "call MojaFunkcja()", "do MojaFunkcja()", "MojaFunckja", "A");

MaxPoints += 1

CorectAnswers_ [7] = "A"

Questions[7] = QuestionNumber8

const QuestionNumber9 = new QuestionWithCheckBoxs("Kt??re if zwr??c?? warto???? true je??eli A b??dzie wi??ksze od B", "9", "if(A > B){}", "if(!A > B){}", "if(A == B){}", "if(!A < B){}", "A, D");

MaxPoints += 2

CorectAnswers_ [8] = "A, D"

Questions[8] = QuestionNumber9

const QuestionNumber10 = new QuestionWithRadio("Wybierz sk??adnie p??tli do while", "10", "while(warunek){}do", "while(warunek)do{}", "do{}while(warunek)", "while{}do(warunek)", "C");

MaxPoints += 1

CorectAnswers_ [9] = "C"

Questions[9] = QuestionNumber10

const QuestionNumber11 = new QuestionWithCheckBoxs("Jak zakomentowa?? kod w javaScript", "11", "#komentarz", "//komentarz", "/*komentarz*/", "coment{komentarz}", "B, C");

MaxPoints += 2

CorectAnswers_ [10] = "B, C"

Questions[10] = QuestionNumber11

const QuestionNumber12 = new QuestionWithRadio("Jakiej fuckcji z klasy Mah trzba u??y?? aby z a = 5.9 wysz??o a = 5", "12", "Math.round(a)", "Marh.sqrt(a)", "Math.pow(a)", "Math.floor(a)", "D");

MaxPoints += 1

CorectAnswers_ [11] = "D"

Questions[11] = QuestionNumber12

const QuestionNumber13 = new QuestionWithCheckBoxs("Jak zadeklarowac zmienn?? w JavaScript ?", "13", "int a", "var a", "let a", "const a", "B, C, D");

MaxPoints += 2

CorectAnswers_ [12] = "B, C, D"

Questions[12] = QuestionNumber13

const QuestionNumber14 = new QuestionWithText('Jaka funkcje trzeba uzy?? aby zamkn???? karte ze stron??', 14, 'window.close()!window.close();');

MaxPoints += 2

CorectAnswers_ [13] = 'window.close()'

Questions[13] = QuestionNumber14

const QuestionNumber15 = new QuestionWithRadio("switch(a){} Co trzeba wpisac do klamer ?", "15", "skrzynka 1: break;", "Case 1: break;", "case 1: break;", "case1: break;", "C");

MaxPoints += 1

CorectAnswers_ [14] = "C"

Questions[14] = QuestionNumber15

const QuestionNumber16 = new QuestionWithRadio("jakiej funkcji obiektu Date trzeba u??y?? aby dosta?? godziny", "16", "getHours()", "we??Godziny()", "takeHours()", "GetHours()", "A");

MaxPoints += 1

CorectAnswers_ [15] = "A"

Questions[15] = QuestionNumber16

const QuestionNumber17 = new QuestionWithCheckBoxs("W jakiej sekcji umieszczmy skrypt ?", "17", "&#60;html&#62;", "&#60;body&#62;", "&#60;head&#62;", "Wszystkie odpowiedzi s?? poprawne", "B, C");

MaxPoints += 2

CorectAnswers_ [16] = "B, C"

Questions[16] = QuestionNumber17

const QuestionNumber18 = new QuestionWithRadio("Zaznacz operator logiczny i", "18", "||", "&&", "==", ">=", "B");

MaxPoints += 1

CorectAnswers_ [17] = "B"

Questions[17] = QuestionNumber18

const QuestionNumber19 = new QuestionWithRadio("Math.floor(Math.random() * a) + b Co musisz podstawi?? pod zmienn?? a oraz b aby losowana by??a liczba z zakresu od 2 do 5", "19", "a = 5, b = 1", "a = 3, b = 2", "a = 2, b = 3", "a = 4, b = 2", "D");

MaxPoints += 1

CorectAnswers_ [18] = "D"

Questions[18] = QuestionNumber19

const QuestionNumber20 = new QuestionWithRadio("Co zalertuje podany kod alert(10 > 9) ", "20", "true", "Error", "NaN", "false", "A");

MaxPoints += 1

CorectAnswers_ [19] = "A"

Questions[19] = QuestionNumber20

const QuestionNumber21 = new QuestionWithRadio("Jak da????czy?? plik JavaScriptu do html", 21, '&#60;script href="plik.js"&#62;', '&#60;script name="plik.js"&#62;', '&#60;script src="plik.js"&#62;', '&#60;script source="plik.js"&#62;', "C");

MaxPoints += 1

CorectAnswers_ [20] = "C"

Questions[20] = QuestionNumber21

var CheckYourAnserwers = () =>
{
    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="Reset()" type="button">Jeszcze <br> raz!!!</button>'

    document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="QuizEnd ()" type="button">Powr??t do strony ko??cowej</button>'

    QuestionDiv.innerHTML = ""

    document.querySelector("#ScoreBoardEater").innerHTML =  '<div class="scoreboard">'

    document.querySelector(".scoreboard").innerHTML = '<div style="padding: 15px;" id="PaddingDiv"></div>'

    document.querySelector("#PaddingDiv").innerHTML = '<div class="Column">Pytanie</div><div class="Column">Poprawna odp</div><div class="Column">Twoja odp</div><div style="clear:both;"></div>'

    for(var i = 0; i < HowManyQuestions; i++)
    {
        var Class_ = "ScoreDivWTF"

        var _Answer_ = ""

        var ColorForTextCorrectAnserwer = ''

        if(UserAnswerwers[i] == "" || UserAnswerwers[i] == null)
        {
            UserAnswerwers[i] = "Brak !"
        }
        
        if(Questions[i].QuestionType != "Text")
        {
            Class_ = "ScoreDiv"
            // odp A
            if(Questions[i].CorectAnswer.includes('A'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">A</span> ' + Questions[i].AnswerA + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div  class="ABCD_Answer"><span class="BadAnswer">A</span> ' + Questions[i].AnswerA + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp B
            if(Questions[i].CorectAnswer.includes('B'))
            {
                _Answer_ += '<div  style="color:rgb(13, 192, 22);"class="ABCD_Answer"><span class="CorrectAnswer">B</span> ' + Questions[i].AnswerB + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">B</span> ' + Questions[i].AnswerB + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp C
            if(Questions[i].CorectAnswer.includes('C'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">C</span> ' + Questions[i].AnswerC + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">C</span> ' + Questions[i].AnswerC + ' </div> <div style="clear:both;height:6px;"></div>';
            }
            // odp D
            if(Questions[i].CorectAnswer.includes('D'))
            {
                _Answer_ += '<div style="color:rgb(13, 192, 22);" class="ABCD_Answer"><span class="CorrectAnswer">D</span> ' + Questions[i].AnswerD + ' </div> <div style="clear:both;"></div>';
            }
            else
            {  
                _Answer_ += '<div class="ABCD_Answer"><span class="BadAnswer">D</span> ' + Questions[i].AnswerD + ' </div> <div style="clear:both;"></div>';
            }
        }
        else
        {
            _Answer_  = CorectAnswers_ [i]
            ColorForTextCorrectAnserwer = 'style="color:rgb(13, 192, 22);"';
        }
        

        var Styles = ""

        if(Points[i] == 0)
        {
            Styles = "border: 2px solid red;color: red;" 
        }
        else if(Points[i] == Questions[i].MaxPoints)
        {
            Styles = "border: 2px solid #37ff00;color: #37ff00;"
        }

        document.querySelector("#PaddingDiv").innerHTML += '<div class="ScoreDivWTF" >'+ Questions[i].Question_ +'</div><div class="' +  Class_ + '" ' + ColorForTextCorrectAnserwer + '>'+ _Answer_ +'</div></div><div class="ScoreDivWTF" style="'+Styles+'" >'+ UserAnswerwers[i] +'</div><div style="clear:both;">'
    }

    QuestionDiv.innerHTML += '</div>'
}

var QuizEnd = () =>
{                                                                   
    var sum = 0

    for(var i = 0; i < Points.length ; i++)
    {
        sum += Points[i]
    }

    document.querySelector("#ScoreBoardEater").innerHTML = ""

    document.querySelector("#TakeNameEater").innerHTML = ""

    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="Reset()" type="button">Jeszcze <br> raz!!!</button>'

    document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="CheckYourAnserwers()" type="button">Sprawd?? swoje odpowiedzi</button>'

    document.querySelector("#QuestionNumber").innerHTML = "";

    document.querySelector('#QuestionNumber').style = "visibility: hidden;"   

    var percent = (sum / MaxPoints) * 100

    var grade = "jednen";

    var Hello_ = "Jedyna naucz si??  "

    if(percent >= 40)
    {
        grade = "dwa";

        Hello_ = "Postaraj si?? bardziej "
    }
    if(percent >= 66)
    {
        grade = "trzy";

        Hello_ = "Mog??o by?? lepiej "
    }
    if(percent >= 75)
    {
        grade = "cztery";

        Hello_ = "Jest okej "
    }
    if(percent >= 90)
    {
        grade = "pi????";

        Hello_ = "Brawo "
    }
    if(percent >= 99)
    {
        grade = "sze????";

        Hello_ = "Gratulacje "
    }   

    QuestionDiv.style = "text-align: center;font-size:32px" 
    QuestionDiv.innerHTML = '<span style="font-size: 42px;">'+ Hello_ + Name + " !</span><br><br>";
    QuestionDiv.innerHTML += "Zdoby??e?? " + sum + "/" + MaxPoints + " punkt??w";
    QuestionDiv.innerHTML += "<br><br>"
    QuestionDiv.innerHTML += "Zdoby??e?? " + percent.toFixed(2) + "%"
    QuestionDiv.innerHTML += "<br><br>"
    QuestionDiv.innerHTML += "Zdoby??e?? ocen?? " + grade
 }

var Reset = () =>
{
    location.reload()
}

var CheckCheckBoxQuestion = (CorectAnswer) =>
{
    var Answers = document.querySelectorAll(".RadioButtonAndCheckBox");

    var Answer = "";

    var points = 0;

    for(var i = 0; i < 4; i++)
    {
        if(Answers[i].checked)
        {
            Answer += Answers[i].value + ", "
        }
    }

    var Answer_ = Answer
    
    Answer = ""

    for(var i = 0;i < Answer_.length - 2;i++)
    {
        Answer += Answer_[i]
    }

    if (Answer == CorectAnswer)
    {
        points = 2
    }
    else
    {
        points = 0;
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckRadioQuestion = (CorectAnswer) =>
{
    var Answers = document.querySelectorAll(".RadioButtonAndCheckBox");

    var Answer = "";

    var points = 0;

    for(var i = 0; i < 4; i++)
    {
        if(Answers[i].checked)
        {
            Answer += Answers[i].value
        }
    }

    if(Answer == CorectAnswer)
    {
        points = 1
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckSelectQuestio = (CorectAnswer) =>
{
    var Answer = document.querySelector(".SelectQuestion").value;

    var points = 0;

    if(Answer == CorectAnswer)
    {
        points = 1
    }

    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

var CheckTextQuestion = (CorectAnswers) =>
{
    var Answer = document.querySelector(".TextQuestion").value;

    var CorectAnswer = CorectAnswers.split('!')

    var points = 0;
    for(var i = 0; i < CorectAnswer.length ;i++)
    {
        if(Answer == CorectAnswer[i])
        {
            points = 2
    
            CorectAnswer[QuestionNumber - 1] = Answer
        }
    }


    UserAnswerwers[QuestionNumber - 1] = Answer

    Points[QuestionNumber - 1] = points

    if(Answer == "")
    {
        return true
    }
    else
    {
        return false
    }
} 

function IfQuestionEqualsZero ()
{
    document.querySelector("#TakeNameEater").innerHTML = '<div id="TakeName">Podaj Imi?? <br><br><input type="text" id="NameTaker" value="'+ Name +'"></div>'

    QuestionDiv.innerHTML = "";

    document.querySelector('#BackButtonEater').innerHTML = ""

    document.querySelector("#QuestionNumber").innerHTML = "";

    document.querySelector('#QuestionNumber').style = "visibility: hidden;"   
}

function IfQuestionIsHigherThanZero()
{
    document.querySelector("#TakeNameEater").innerHTML = "";

    document.querySelector('#BackButtonEater').innerHTML = '<button class="Buttons_" onclick="BackToPreviosQuestion()" type="button">Cofam si??!!!</button>'

    document.querySelector("#QuestionNumber").innerHTML = "Pytanie " + QuestionNumber + "/" + HowManyQuestions;

    document.querySelector('#QuestionNumber').style = "visibility: visible;"
    if(QuestionNumber == HowManyQuestions)
    {
        document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="GoToNextQuestion()" type="button">Zako??cz quiz</button>'
    }
    else
    {
        document.querySelector('#GoNextButtonEater').innerHTML = '<button class="Buttons_" onclick="GoToNextQuestion()" type="button">Id?? dalej !!!</button>'
    }
   
}

function GoToNextQuestion()
{

    var IsEmpty_ = false; 

    document.querySelector("#AlertEater").innerHTML = ""

    if(ImBack == false)
    {
        if(QuestionNumber == 0)
        {
            Name = document.querySelector("#NameTaker").value

            if(Name == "")
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Musisz co?? poda?? !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
            else if(!isNaN(Name))
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Imi?? nie jest liczb?? !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
            else if(Name.length > 32)
            {
                QuestionNumber -= 1;
                document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Imi?? ma do 32 znak??w !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
                WriteNameInput = false;
                document.querySelector("#AlertEater").style = "display: block;"
            }
        }
        if(QuestionNumber > 0)
        {
            IsEmpty_ = Questions[QuestionNumber - 1].Check()
        }
    }

    ImBack = false 
 
    if(IsEmpty_ == true)
    {
        document.querySelector("#AlertEater").innerHTML = '<div id="Alert">  <div id="AlertCloseDiv"><label id="CloseAlertLabel"><i class="icon-cancel"></i><button type="button" id="CloseAlert" onclick="CloseAlert()"></button></label></div> <div id="AlertText"></div> <div id="AlertCloseDiv"></div><div id="AlertText">Musisz co?? poda?? !!!</div> <div id="AlertCloseDiv"></div> <div id="AlertText"></div></div>'; 
        document.querySelector("#AlertEater").style = "display: block;"
    }
    else
    {
        if( QuestionNumber < -1)
        {
            QuestionNumber = -1;
        }
    
        QuestionNumber += 1;
    
        if(QuestionNumber > 0)
        {
            IfQuestionIsHigherThanZero();
        }
    
        if(HowManyQuestions < QuestionNumber)
        {
            QuizEnd();
        }
        else if(QuestionNumber == 0)
        {
            if(WriteNameInput == true)  
            {
                IfQuestionEqualsZero();
            } 
            else
            {
                WriteNameInput = true;
            }
        }
        else
        {
            QuestionDiv.innerHTML = Questions[QuestionNumber - 1].QuestionContent
        }
    }
}

function BackToPreviosQuestion()
{
    QuestionNumber -= 2;
    ImBack = true
    GoToNextQuestion();
}

var CloseAlert = () =>
{
    document.querySelector("#AlertEater").style = "display: none;" 
}     