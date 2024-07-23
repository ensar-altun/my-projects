#include<iostream>
using namespace std;				//Mustafa Ensar Altun 16/10/2021 Lab Assignment#1- P1
int main(){
	cout << "Please enet your name,surname and your age:";
	string name;
	string surname;
	int age;
	cin >> name >> surname >> age;
	int yearofbirth = 2021 - age;
	cout << "Welcome to the club " << name << " " << surname << "\n" << "Your birth year is " << yearofbirth;
}