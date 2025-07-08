@echo off
REM Script de backup local para o projeto "site novo" (inclui histórico do Git)

set "SOURCE=%~dp0"
set "BACKUPDIR=%USERPROFILE%\Backups_site_novo"

REM Solicita nome e descrição do backup
set /p BKNAME=Digite um nome curto para o backup (ex: antes-atualizacao): 
set /p BKDESC=Digite uma descrição curta (ex: backup antes de atualizar o layout): 

REM Remove espaços do nome para evitar problemas
set "BKNAME=%BKNAME: =_%"
set "BKDESC=%BKDESC: =_%"

REM Data e hora formatadas
set "DATE=%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%"
set "DATE=%DATE: =0%"

REM Monta o nome da pasta de backup
set "DEST=%BACKUPDIR%\backup_%DATE%_%BKNAME%_%BKDESC%"

REM Cria a pasta de backup se não existir
if not exist "%BACKUPDIR%" mkdir "%BACKUPDIR%"

REM Copia todo o conteúdo do projeto (incluindo .git) para a pasta de backup
xcopy "%SOURCE%*" "%DEST%" /E /H /C /I /Y

REM Mensagem de sucesso
@echo Backup realizado em: %DEST%
pause
