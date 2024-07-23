#include<iostream>		//Mustafa Ensar Altun 16/10/2021 Lab Assignment #1 -P2
using namespace std;
int main() {
	cout << "Please enter a temperature value:";
	double fahrenheit;
	cin >> fahrenheit;
	double celcius = (fahrenheit - 32) * 5 / 9;
	double kelvin = celcius + 273.15;
	cout << fahrenheit << " Fahrenheit = " << celcius << " Celcius = " << kelvin << " Kelvin";
}
