@echo off
echo ========================================
echo   Dashboard Admin - Demarrage
echo ========================================
echo.

echo [1/3] Verification de PostgreSQL...
echo Assurez-vous que PostgreSQL est demarre et que la base de donnees 'dashboard_admin' existe
echo.

echo [2/3] Demarrage du backend (NestJS)...
start "Backend" cmd /k "cd backend && npm run start:dev"
timeout /t 3 /nobreak >nul

echo [3/3] Demarrage du frontend (Angular)...
start "Frontend" cmd /k "cd frontend && npm start"
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   Les serveurs sont en cours de demarrage
echo ========================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:4200
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul

