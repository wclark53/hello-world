/* program name:module4lab2.cpp
*Willard Clark 	
*Date last updated: 02/06/2019
* purpose: Resturant Bill
*/

#include <iostream>
#include <iomanip> 
#include <fstream>


int main()
{

	ifstream inFile;
	ofstream outFile;

	double meal1, meal2, meal3, meal4, meal5, meal6;
	double tax = (meal.0675)
		double tip = (meal*.20)
		double total = (meal1 - tax + tip);

	inFile.open(meal.txt);
	outFile.open(mealPrice.txt);

	outFile << fixed << showpoint;
	outFile << setpercision(2);

	cout << "processing data"

		inFile >> meal1 >> meal2 >> meal3 >> meal4 >> meal5 >> meal6;
	outFile << "meal prices: " setw(6) << meal1 << setw(6) << meal2 << setw(6) meal3
		<< setw(6) << meal4 <<  << setw(6) meal5 << setw(6) meal5 << setw(6) meal6 << endl;

	outFile << " Meal prices: " << setw(6) << total << endl;

	inFile.close(meal.txt)
		outFile.close(mealPrice.txt)
		return 0;
}


              
