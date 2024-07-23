#include<iostream>
using namespace std;
				//mustafa ensar altun 16/10/2021 lab assignment#1 p3
int main() {
	cout << "Please enter two integers and an operator between them:";
	float sayi1;
	float sayi2;
	char t = '+';
	char c = '-';
	char ch = '*';
	char b = '/';
	char islem;
	
	cin >> sayi1 >> islem >> sayi2;
	if (islem == t) {
		cout << sayi1 << " + " << sayi2 << " = " << sayi1 + sayi2;
	}

	else if (islem == c) {
		cout << sayi1 << " - " << sayi2 << " = " << sayi1 - sayi2;

	}

	else if (islem == ch) {
		cout << sayi1 << " * " << sayi2 << " = " << sayi1 * sayi2;
	}
	else if (islem==b){
		cout <<sayi1<<" / "<<sayi2<<" = " << sayi1 / sayi2;
	}

}