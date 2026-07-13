section .data
    message1        db  "Enter the first number: "  , 0 ; Mensagem para solicitar o primeiro número
    message2        db  "Enter the second number: " , 0 ; Mensagem para solicitar o segundo número
    resultMessage   db  "Result: ", 0                   ; Mensagem para mostrar o resultado
    newLine         db  10, 0                           ; Quebra de linha ASCII

section .bss
    number1 resb    4                                   ; Reserva 4 bytes para armazenar o primeiro número digitado
    number2 resb    4                                   ; Reserva 4 bytes para armazenar o segundo número digitado
    result  resb    4                                   ; Reserva 4 bytes para armazenar o resultado da operação

section .text
    global _start                                       ; Ponto de entrada do programa

_start:
                                                        ; Exibir mensagem para o primeiro número
    mov rax, 1                                          ; Código de syscall write
    mov rdi, 1                                          ; Saída padrão (stdout)
    mov rsi, message1                                   ; Endereço da mensagem
    mov rdx, 25                                         ; Tamanho da mensagem
    syscall                                             ; Chamada de sistema para escrever na tela

                                                        ; Ler o primeiro número
    mov rax, 0                                          ; Código de syscall read
    mov rdi, 0                                          ; Entrada padrão (stdin)
    mov rsi, number1                                    ; Endereço onde será armazenado o número
    mov rdx, 4                                          ; Quantidade máxima de bytes para leitura
    syscall                                             ; Chamada de sistema para ler o teclado

                                                        ; Converter ASCII para inteiro
    movzx   eax, byte [number1]                         ; Move o valor ASCII para eax
    sub     eax, '0'                                    ; Converte o caractere para número
    mov     ebx, eax                                    ; Guarda o número no ebx

                                                        ; Exibir mensagem para o segundo número
    mov rax, 1
    mov rdi, 1
    mov rsi, message2
    mov rdx, 26
    syscall

                                                        ; Ler o segundo número
    mov rax, 0
    mov rdi, 0
    mov rsi, number2
    mov rdx, 4
    syscall

                                                        ; Converte ASCII para inteiro
    movzx   eax, byte [number2]                         ; Move o valor ASCII para eax
    sub     eax, '0'                                    ; Converte o caractere para número

                                                        ; Soma
    add     eax, ebx                                    ; Soma eax (number2) com o ebx (number1)

                                                        ; Converte resultado para ASCII
    add     eax, '0'                                    ; Converte o número para ASCII
    mov     [result], al                                ; Armazena o resultado convertido em result

                                                        ; Mostrar mensagem result
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, resultMessage
    mov     rdx, 8
    syscall

                                                        ; Mostrar o resultado
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, result
    mov     rdx, 1
    syscall

                                                        ; Mostrar quebra de linha
    mov     rax,    1
    mov     rdi,    1
    mov     rsi,    newLine
    mov     rdx,    1
    syscall

                                                        ; Encerra o programa
    mov     rax,    60                                  ; Código de syscall exit
    xor     rdi,    rdi                                 ; Código de saída 0 (sem erro)
    syscall