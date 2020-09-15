from tkinter import*
import tkinter.messagebox
import random
# hangman GUI

class Hangman:
    def __init__(self):
        window = Tk()
        window.title("Hangman")

        self.letterGuessed = []
        self.letterMissed = []
        self.numberMissed = 0
        self.guess = StringVar()
        self.wordList = ["python", "awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves",
                "fervid", "fishhook", "fjord", "gazebo", "gypsy", "haiku", "haphazard", "hyphen", "ivory", "jazzy",
                "jiffy","jinx", "jukebox", "kayak", "kiosk", "klutz", "memento"]
        self.word = random.choice(self.wordList)
        
            
        


        self.canvas = Canvas(window, width = 600, height = 480, bg = "white")
        self.canvas.pack()

        frame = Frame(window)
        frame.pack()

        
        self.entry = Entry(frame, textvariable = self.guess)
        
        self.entry.pack()
        
        
        
        btnsubmit = Button(frame, text = "Submit", command = self.processWord)
        btnsubmit.pack()

        self.canvas.create_line(40, 40, 40, 200, width=6, fill="black", tags = "gallow")
        self.canvas.create_line(40, 40, 110, 40, width=6, fill="black", tags = "gallow")
        self.canvas.create_line(110, 40, 110, 75, width=6, fill="black", tags = "gallow")
        self.canvas.create_line(10, 200, 70, 200, width=6, fill="black", tags = "gallow")

        self.secretWord()
        
              
        
        window.mainloop()

    def getWord(self, guess):
        print(guess)
        tempword = ""
        if guess == str(self.word):
            tempword = str(self.word)
            print("Great job you guessed the word")
        for guess in str(self.word):
            if guess in str(self.word):
                tempword += guess
            else:
                tempword += "*"
            
        return tempword

    def getNewWord(self):
        newWord = random.shuffle(self.wordList)
        return newWord

    def processMissed(self):
        if len(self.letterMissed) >= 1:
            self.canvas.delete("missed")

        self.canvas.create_text(200, 250, text = self.letterMissed, font="Times 16 bold", tags = "missed")

    def secretWord(self):

        secretWord = ""
        
        if str(self.guess.get()) == str(self.word):
            secretWord = str(self.word)
            tkinter.messagebox.showinfo("showinfo", "Great Job you guessed right :)")
            
            return self.canvas.create_text(400, 200, text = secretWord, font= "Times 16 bold", tags = "secretWord")
        else:
            for letter in self.word:
                if letter in self.letterGuessed:
                    secretWord += letter
                else:
                    secretWord += "*"
        return self.canvas.create_text(400, 200, text = secretWord, font= "Times 16 bold", tags = "secretWord")        
        
    
    def clearText(self):
        self.entry.delete(0,'end')

    def clearGame(self):
        self.canvas.delete("head","body","rightarm","rightleg","leftarm","leftleg","missed", "secretWord")
        self.letterMissed.clear()
        self.letterGuessed.clear()
        self.getNewWord()
        self.secretWord()
        
        
        
    def processWord(self):
        word = str(self.word)
        numberMissed = 0
        print(word, self.letterMissed)
        
        
        

        if str(self.guess.get()) in word:
           print("great job Enter another letter")
           if str(self.guess.get()) in self.letterGuessed:
                tkinter.messagebox.showerror("showerror", "This letter has been picked already Please try again")
                #print("This letter has been picked already")
                
           elif str(self.guess.get()) in self.letterMissed:
               tkinter.messagebox.showerror("showerror", "This letter has been picked already Please try again")

           else:
               self.letterGuessed.append(self.guess.get())
           
           self.canvas.delete("secretWord")
           self.secretWord()
           self.clearText()
           

        elif str(self.guess.get()) not in word:
           self.letterMissed.append(self.guess.get())
           self.drawHead()
           self.canvas.delete("missed")
           self.canvas.delete("secretWord")
           self.numberMissed += 1
           self.clearText()
           self.processMissed()
           self.secretWord()
           
           
           if self.numberMissed == 2:
               self.drawBody()
               self.processMissed()
           elif self.numberMissed == 3:
               self.drawLeftArm()
               self.processMissed()
           elif self.numberMissed == 4:
               self.drawRightArm()
               self.processMissed()
           elif self.numberMissed == 5:
               self.drawLeftLeg()
               self.processMissed()
           elif self.numberMissed == 6:
               self.drawRightLeg()
               self.processMissed()
           elif self.numberMissed > 6:
               tkinter.messagebox.showerror("showerror", "GAME OVER")
               askyesno = tkinter.messagebox.askyesno("askyesno", "Play another game?")
               if askyesno == True:
                   self.clearGame()
                   self.numbermissed = 0
                   
                               
               

    def drawHead(self):
        self.canvas.create_oval(95, 75, 125, 110, width=5, tags = "head")        

    def drawBody(self):
        self.canvas.create_line(110, 110, 110, 155, width=5, fill="black", tags = "body")        

    def drawLeftArm(self):
        self.canvas.create_line(110, 120, 90, 145, width=5, fill="black", tags = "leftarm")
        
    def drawRightArm(self):
        self.canvas.create_line(110, 120, 130, 145, width=5, fill="black", tags = "rightarm")

    def drawLeftLeg(self):
        self.canvas.create_line(110, 155, 90, 175, width=5, fill="Black", tags = "leftleg")

    def drawRightLeg(self):
        self.canvas.create_line(110, 155, 130, 175, width=5, fill="black", tags = "rightleg")

        

    
        
            

        
Hangman()
