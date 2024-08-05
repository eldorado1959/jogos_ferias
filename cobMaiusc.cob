       IDENTIFICATION DIVISION.  
       PROGRAM-ID. Convert6.

       ENVIRONMENT DIVISION.  

       DATA DIVISION.  
       WORKING-STORAGE SECTION.  
       01  texto     PIC X(100).  
       01  maiusc    PIC X(100).  
       01  I                  PIC 99 VALUE 1.  
       01  Len                PIC 99 VALUE 0.  

       PROCEDURE DIVISION.  
       MAIN-PARAGRAPH.  

           DISPLAY 'Digite um texto: ' WITH NO ADVANCING.  
           ACCEPT texto.  

      * Contar o comprimento do texto manualmente  
           PERFORM P-MOVE UNTIL texto(I) = SPACES  
               ADD 1 TO Len  
               ADD 1 TO I  
           END-PERFORM.  

           MOVE 1 TO I.  

      * Inicialize a string maiusc com espaços  
           MOVE SPACES TO maiusc.  

       P-MOVE.
           PERFORM VARYING I FROM 1 BY 1 UNTIL I > Len  
               EVALUATE texto(I)  
                   IF texto(I) = 'a' MOVE 'A' TO maiusc(I)  
                   IF texto(I) = 'b' MOVE 'B' TO maiusc(I)  
                   IF texto(I) = 'c' MOVE 'C' TO maiusc(I)  
                   IF texto(I) = 'd' MOVE 'D' TO maiusc(I)  
                   IF texto(I) = 'e' MOVE 'E' TO maiusc(I)  
                   IF texto(I) = 'f' MOVE 'F' TO maiusc(I)  
                   IF texto(I) = 'g' MOVE 'G' TO maiusc(I)  
                   IF texto(I) = 'h' MOVE 'H' TO maiusc(I)  
                   IF texto(I) = 'i' MOVE 'I' TO maiusc(I)  
                   IF texto(I) = 'j' MOVE 'J' TO maiusc(I)  
                   IF texto(I) = 'k' MOVE 'K' TO maiusc(I)  
                   IF texto(I) = 'l' MOVE 'L' TO maiusc(I)  
                   IF texto(I) = 'm' MOVE 'M' TO maiusc(I)  
                   IF texto(I) = 'n' MOVE 'N' TO maiusc(I)  
                   IF texto(I) = 'o' MOVE 'O' TO maiusc(I)  
                   IF texto(I) = 'p' MOVE 'P' TO maiusc(I)  
                   IF texto(I) = 'q' MOVE 'Q' TO maiusc(I)  
                   IF texto(I) = 'r' MOVE 'R' TO maiusc(I)  
                   IF texto(I) = 's' MOVE 'S' TO maiusc(I)  
                   IF texto(I) = 't' MOVE 'T' TO maiusc(I)  
                   IF texto(I) = 'u' MOVE 'U' TO maiusc(I)  
                   IF texto(I) = 'v' MOVE 'V' TO maiusc(I)  
                   IF texto(I) = 'w' MOVE 'W' TO maiusc(I)  
                   IF texto(I) = 'x' MOVE 'X' TO maiusc(I)  
                   IF texto(I) = 'y' MOVE 'Y' TO maiusc(I)  
                   IF texto(I) = 'z' MOVE 'Z' TO maiusc(I).  
      *             IF OTHER MOVE texto(I) TO maiusc(I). 
               END-EVALUATE.  
      *     END-PERFORM.  

           DISPLAY 'Texto em letras maiusculas: ' maiusc.  
      *     STOP RUN.