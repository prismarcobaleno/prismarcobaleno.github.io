#include <unistd.h>
#include <stdio.h>

#ifndef COLORI
#define COLORI 1
#endif
//fallo diventare 0 se il terminale tuo non supporta i colori

void stampa(char *a, int colore)
	{
	if (COLORI == 1)
		{
		printf("\x1b[%im", colore);
		printf("%s", a);
		printf("\x1b[0m");
		}
	else
		printf("%s", a);
	}
// 3 - inclinato
// 30 - nera
// 33 - beige
// 34 - blu
// 31 -rossa
// 0 - torna normale

void aiuto(int aiuto)
	{
	printf("Devi mantenerti tra 50 e 150 per stare bene, e tra 0 e 300 per sopravvivere.\n");
	printf("Usa queste lettere come comandi:\n");
	stampa("* [C]arboidrati (+30/+20);\n", aiuto);
	stampa("* [Z]uccheri (+50);\n", aiuto);
	stampa("* [G]rassi (+20/+30);\n", aiuto);
	stampa("* [P]roteine (+5/+20);\n", aiuto);
	stampa("* [F]ibre (-5/+5);\n", aiuto);
	stampa("* [D]igiuno (-10)\n", aiuto);
	stampa("([A]iuto stampa di nuovo questa lista)\n", 3);
	}

int main()
	{
	unsigned int	glicemia = 100;
	unsigned int	iper = 150;
	unsigned int	ipo = 50;
	char c;
	unsigned int	riserva = 10;
	int ai = 33;
	int blu = 35;
	int err = 31;
	int problemi = 5;
	long long int turno = 0;
	
	printf("Inizi con %d glicemia e %d riserve di grassi, %d/10 di malattia.\n", glicemia, riserva, problemi);
	stampa("Ogni mossa simula circa un'ora. Molto vagamente. Molto molto vagamente.\n", 0);
	aiuto(ai);
	while(glicemia > 0 && glicemia < 300 && problemi < 50)
		{
		turno++;
		if (c != '\n')
			{
			printf("\nTurno n.%lld: %d glicemia. %d riserve. Malattie %d/50.\n", turno, glicemia, riserva, problemi);
			if (glicemia > iper)
				stampa("\n\tIperglicemia!!\n", err);
			if (glicemia < ipo)
				stampa("\n\tIpoglicemia!!\n", err);
			if (glicemia > iper || glicemia < ipo)
				problemi++;
			if (problemi > 40)
				{
				stampa("\nTi stai ammalando.\n", err);
				}
			printf("Mangi: ");
			}
			c = getchar();
		if (c == 'Z' || c == 'z')
			{
			stampa("\tZuccheri! +50 glicemia\n", blu);
			glicemia = glicemia + 50;
			}
		else if (c == 'C' || c == 'c')
			{
			stampa("\tCarboidrati! +30 glicemia, +20 riserva\n", blu);
			glicemia = glicemia + 30;
			riserva = riserva + 20;
			}
		else if (c == 'G'|| c == 'g')
			{
			stampa("\tGrassi! +20 glicemia, +30 riserva\n", blu);
			glicemia = glicemia + 20;
			riserva = riserva + 30;
			}
		else if (c == 'P' || c == 'p')
			{
			stampa("\tProteine! +5 glicemia, +10 riserva\n", blu);
			riserva = riserva + 10;
			glicemia = glicemia + 5;
			}
		else if (c == 'F' || c == 'f')
			{
			stampa("\tFibre! -5 glicemia, +5 riserva\n", blu);
			glicemia = glicemia - 5;
			riserva = riserva + 5;
			}
		else if (c == 'a' || c == 'A')
			{
			aiuto(ai);
			}
		else if (c == 'd' || c == 'D')
			{
			stampa("\tDigiuno! - 15 glicemia\n", blu);
			glicemia = glicemia - 15;
			if (riserva > 10 && glicemia < ipo)
				{
				glicemia = glicemia + 10;
				riserva = riserva - 10;
				stampa("\t+10 glicemia dalle riserve!\n", blu);
				}
			else if (glicemia < iper && riserva >= 5)
				{
				glicemia = glicemia + 5;
				riserva = riserva - 5;
				stampa("\t+5 glicemia dalle riserve!\n", blu);
				}
			}
		else if ((c >= 'a' && c <= 'z') || ((c >= 'A' && c <= 'Z')))
			{
			stampa("(Lettera non valida. Premi A se hai bisogno di [A]iuto)\n", ai);
			turno--;
			}
		else
			{
			c = '\n';
			turno--;
			}
		}
	if (problemi >= 50)
		printf("\nHai perso al turno %lld: Troppe malattie! (%d/50)\n", turno, problemi);
	if (glicemia <= 0 || glicemia >= 999999)
		printf("\nHai perso al turno %lld: Glicemia troppo bassa! (%d)\n", turno, glicemia);
	else if (glicemia >= 300)
		printf("\nHai perso al turno %lld: Glicemia troppo alta! (%d)\n", turno, glicemia);
}