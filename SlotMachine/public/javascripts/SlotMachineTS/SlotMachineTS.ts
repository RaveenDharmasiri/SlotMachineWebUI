// this is the reel class which in this program where the array is created and the symbol objects are added to it.
class Reel {
    // an array that contains 6 elements.
    static mainSymbolList: Array<Symbol> = new Array(6);

    //  declaration of the random number.
    private randomNumber: number;


    private tempRandomNumber = 6;

    static addingImages() {
        // adding the symbol objects to the array
        let symbol1: Symbol = new Symbol();
        symbol1.setImage("assets/images/bell.png");
        symbol1.setImageValue(6);
        Reel.mainSymbolList[0] = symbol1;

        let symbol2: Symbol = new Symbol();
        symbol2.setImage("assets/images/lemon.png");
        symbol2.setImageValue(3);
        Reel.mainSymbolList[1] = symbol2;

        let symbol3: Symbol = new Symbol();
        symbol3.setImage("assets/images/redseven.png");
        symbol3.setImageValue(7);
        Reel.mainSymbolList[2] = symbol3;

        let symbol4: Symbol = new Symbol();
        symbol4.setImage("assets/images/watermelon.png");
        symbol4.setImageValue(5);
        Reel.mainSymbolList[3] = symbol4;

        let symbol5: Symbol = new Symbol();
        symbol5.setImage("assets/images/plum.png");
        symbol5.setImageValue(4);
        Reel.mainSymbolList[4] = symbol5;

        let symbol6: Symbol = new Symbol();
        symbol6.setImage("assets/images/cherry.png");
        symbol6.setImageValue(2);
        Reel.mainSymbolList[5] = symbol6;
    }

    // the purpose of this method is to accept the randomNumber and make sure that the same number is not generated twice in the row as the random number.
    setRandomNumber(randomNumber: number): void {
        if (randomNumber == this.tempRandomNumber) {
            if (this.tempRandomNumber >= 0 && this.tempRandomNumber <= 4) {
                this.randomNumber = randomNumber + 1;
            } else {
                this.randomNumber = 0;
            }
        } else {
            this.randomNumber = randomNumber;
        }
        this.tempRandomNumber = this.randomNumber;
    }

    // this method will return the random when it has been invoked.
    getRandomNumber(): number {
        return this.randomNumber;
    }

    // this method will accept the randomNumber and the path of the image. the purpose of this method is to replace the image at the given path with
    // an image from the array from the given random number.
    changeImages(imageId: HTMLImageElement, randomNumber: number) {
        imageId.src = Reel.mainSymbolList[randomNumber].getImage();
    }
}

interface ISymbol {
    setImage(imagePath: string): void;

    getImage(): string;

    setImageValue(imageValue: number): void;

    getImageValue(): number;
}

// this Symbol class is used to store the properties related to images...
class Symbol implements ISymbol {
    private imagePath: string;

    private imageValue: number;

    // this method will set the path of the image
    setImage(imagePath: string): void {
        this.imagePath = imagePath;
    }

    // this method will return the path of the image
    getImage(): string {
        return this.imagePath;
    }

    // this method will set the respective value of each image object.
    setImageValue(imageValue: number): void {
        this.imageValue = imageValue;
    }

    // this method will return the value of the image object that invokes it.
    getImageValue(): number {
        return this.imageValue;
    }
}

// Invoking the static method addingImages from the Reel class. This method is used to store images in the array.
Reel.addingImages();
let reelObj1: Reel = new Reel();
let reelObj2: Reel = new Reel();
let reelObj3: Reel = new Reel();

let betAmount = 0;
let creditAmount = 10;
let randomNumber = 0;
let isSpinClicked :boolean;

let reel1Spin = true;
let reel2Spin = true;
let reel3Spin = true;

let wins = 0;
let loses = 0;
let averageCredit =0;
let noOfSpins = 0;

let totalWinScore = 0;

// this is the method for the spin function. the purpose of this method is to make sure that the images are going to spin at a rate of 75 ms.
function btnSpinFunction() {
    isSpinClicked = true;
    if (betAmount == 0) {
        alert("Please bet before spinning");
    } else {
        noOfSpins++;
        (<HTMLInputElement> document.getElementById("btnSpin")).disabled = true;
        (<HTMLInputElement> document.getElementById("btnAddCoin")).disabled = true;
        (<HTMLInputElement> document.getElementById("btnBetMax")).disabled = true;
        (<HTMLInputElement> document.getElementById("btnBetOne")).disabled = true;
        (<HTMLInputElement> document.getElementById("btnStatistics")).disabled = true;
        reel1Spin = true;
        reel2Spin = true;
        reel3Spin = true;
        (<HTMLInputElement> document.getElementById("btnReset")).disabled = true;
        let setIntervalId = setInterval(function ImageSpinning() {
            if (reel1Spin) {
                randomNumber = Math.floor(Math.random() * 6);
                reelObj1.setRandomNumber(randomNumber);
                reelObj1.changeImages(<HTMLImageElement>document.getElementById("image1"), reelObj1.getRandomNumber());
            } else {

            }

            if (reel2Spin) {
                randomNumber = Math.floor(Math.random() * 6);
                reelObj2.setRandomNumber(randomNumber);
                reelObj2.changeImages(<HTMLImageElement>document.getElementById("image2"), reelObj2.getRandomNumber());
            } else {

            }

            if (reel3Spin) {
                randomNumber = Math.floor(Math.random() * 6);
                reelObj3.setRandomNumber(randomNumber);
                reelObj3.changeImages(<HTMLImageElement>document.getElementById("image3"), reelObj3.getRandomNumber());
            } else {

            }

            if (reel1Spin == false && reel2Spin == false && reel3Spin == false) {
                clearInterval(setIntervalId);
                (<HTMLInputElement> document.getElementById("btnSpin")).disabled = false;
                (<HTMLInputElement> document.getElementById("btnReset")).disabled = false;
                (<HTMLInputElement> document.getElementById("btnBetMax")).disabled = false;
                (<HTMLInputElement> document.getElementById("btnBetOne")).disabled = false;
                (<HTMLInputElement> document.getElementById("btnStatistics")).disabled = false;
                (<HTMLInputElement> document.getElementById("btnAddCoin")).disabled = false;
                reel1Spin = true;
                reel2Spin = true;
                reel3Spin = true;
            }

        }, 75);
    }
}

// this method will increment the credit amount when it has been clicked.
function addCredit() {
    creditAmount++;
    document.getElementById("lblCreditAmount").innerHTML = "" + creditAmount;
}

// this method is used to increment the betting amount
function betCredit() {
    // displaying an alert when the credit amount is not sufficient enough to make a bet.
    if (creditAmount == 0) {
        alert("You do not have enough credit to bet");
    } else if (creditAmount >= 1) {
        betAmount = betAmount + 1;
        creditAmount = creditAmount - 1;
        document.getElementById("lblBetAmount").innerHTML = "" + betAmount;
        document.getElementById("lblCreditAmount").innerHTML = "" + creditAmount;
    }
}

// this method is used to track whether the first reel has been clicked.
function reel1Clicked() {
    reel1Spin = false;
    calculateValue();
}

// this method is used to track whether the second reel has been clicked.
function reel2Clicked() {
    reel2Spin = false;
    calculateValue();
}

// this method is used to track whether the third reel has been clicked.
function reel3Clicked() {
    reel3Spin = false;
    calculateValue();
}

// this method provide the option to the user to change the amount they have bet. this method will set the bet amount to zero and add that amount to the
// credit amount so that the user gets the chance to re-bet.
function resetFunction() {
    (<HTMLInputElement> document.getElementById("btnBetMax")).disabled = false;
    creditAmount = creditAmount + betAmount;
    betAmount = 0;
    document.getElementById("lblBetAmount").innerHTML = "" + betAmount;
    document.getElementById("lblCreditAmount").innerHTML = "" + creditAmount;
}

// this method is used to bet the maximum bet.
function betMax(){
    if(creditAmount >= 3){
        // this is to make sure that the user gets only one chance to bet the maximum for each round.
        (<HTMLInputElement> document.getElementById("btnBetMax")).disabled = true;
        creditAmount = creditAmount - 3;
        betAmount = betAmount + 3;
        document.getElementById("lblBetAmount").innerHTML = "" + betAmount;
        document.getElementById("lblCreditAmount").innerHTML = "" + creditAmount;
    }else{
        alert("There is not enough credit");
    }
}

// this method is used to calculate the winning price for each round.
function calculateValue() {
    if (isSpinClicked == true && reel1Spin == false && reel2Spin == false && reel3Spin == false) {

        let winPrice = 0;

        let imageValue1 = Reel.mainSymbolList[reelObj1.getRandomNumber()].getImageValue();
        let imageValue2 = Reel.mainSymbolList[reelObj2.getRandomNumber()].getImageValue();
        let imageValue3 = Reel.mainSymbolList[reelObj3.getRandomNumber()].getImageValue();

        // if all the three images of the reels are same
        if (imageValue1 == imageValue2 && imageValue1 == imageValue3) {
            winPrice = betAmount * imageValue1;
            creditAmount = creditAmount + winPrice;
            totalWinScore = totalWinScore + winPrice;

            // if the first two images of the reel are same
        } else if (imageValue1 == imageValue2) {
            winPrice = betAmount * imageValue1;
            creditAmount = creditAmount + winPrice;
            totalWinScore = totalWinScore + winPrice;

            // if the first and the last image of the reel are the same
        } else if (imageValue1 == imageValue3) {
            winPrice = betAmount * imageValue1;
            creditAmount = creditAmount + winPrice;
            totalWinScore = totalWinScore + winPrice;

            // if the last two images of the reel are the same.
        } else if (imageValue2 == imageValue3) {
            winPrice = betAmount * imageValue2;
            creditAmount = creditAmount + winPrice;
            totalWinScore = totalWinScore + winPrice;
        }

        document.getElementById("lblCreditAmount").innerHTML = "" + creditAmount;

        if (winPrice > 0) {
            // displaying an alert message if the user won any round
            alert("You won " + winPrice + " credits");
            wins = wins + 1;
        } else {
            // displaying an alert message if the user lost any round.
            alert("You lost " + betAmount + " amount of credit");
            loses = loses + 1;
        }

        betAmount = 0;
        document.getElementById("lblBetAmount").innerHTML = "" + betAmount;

        (<HTMLInputElement> document.getElementById("btnBetMax")).disabled = false;

        isSpinClicked = false;
    }
}

function btnStatisticsFunction(){
    averageCredit = (totalWinScore)/noOfSpins;
    // this is to make sure that the Statistics.html page will be opened in a new window.
    window.open("http://localhost:9000/stat","Statistics", "height=1080,width=1910");
    localStorage.setItem("wins", wins.toString());
    localStorage.setItem("loses",loses.toString());
    localStorage.setItem("Average", averageCredit.toString());
    localStorage.setItem("noOfSpins", noOfSpins.toString());
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.match('http://localhost:9000/stat')) {
        document.getElementById("chartContainer").innerHTML += "There is no information to display";
    }
    if(window.location.href.match('http://localhost:9000/stat')) {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,

            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0",
                indexLabel: "{label} {y}",
                dataPoints: [
                    {y:localStorage.getItem("wins"), label: "Wins"},
                    {y: localStorage.getItem("loses"), label: "Loses"}
                ]
            }]
        });
        chart.render();

        document.getElementById("stats").innerHTML += "Wins:"+localStorage.getItem("wins")+"<br>";
        document.getElementById("stats").innerHTML += "Loses:"+localStorage.getItem("loses")+"<br>";
        document.getElementById("stats").innerHTML += "Average:"+localStorage.getItem("Average")+"<br>";
        document.getElementById("stats").innerHTML += "No Of Spins:"+localStorage.getItem("noOfSpins")+"<br>";
    }
});








