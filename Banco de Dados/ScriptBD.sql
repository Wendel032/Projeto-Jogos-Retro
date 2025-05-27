CREATE DATABASE JogosRetro;
USE JogosRetro;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL,
dtHoraCadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE Jogo(
idJogo INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45) NOT NULL,
dtLancamento DATE NOT NULL,
genero VARCHAR(45) NOT NULL
);

CREATE TABLE RespostasQuiz(
idRespostasQuiz INT AUTO_INCREMENT,
fkUsuario INT UNIQUE,
fkJogo INT,
CONSTRAINT pkComposta
PRIMARY KEY (idRespostasQuiz, fkUsuario, fkJogo),
dtHoraQuiz DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
resposta1 VARCHAR(45) NOT NULL,
resposta2 VARCHAR(45) NOT NULL,
resposta3 VARCHAR(45) NOT NULL,
resposta4 VARCHAR(45) NOT NULL,
resposta5 VARCHAR(45) NOT NULL,
resposta6 VARCHAR(45) NOT NULL,
codigo VARCHAR(45) NOT NULL UNIQUE,
CONSTRAINT fkRespostasQuizUsuario
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
CONSTRAINT fkRespostaQuizJogo
	FOREIGN KEY (fkJogo) REFERENCES Jogo(idJogo)
);

INSERT INTO Jogo VALUES 
(DEFAULT, 'Castlevania: Symphony of the Night', '1997-03-20', 'Metroidvania'),
(DEFAULT, 'Mega Man X', '1993-12-17', 'Plataforma'),
(DEFAULT, 'Final Fantasy Tactics', '1997-06-20', 'Estratégia'),
(DEFAULT, 'The Legend of Zelda Ocarina Of Time', '1998-11-21', 'Aventura'),
(DEFAULT, 'Resident Evil 2', '1998-01-21', 'Terror'),
(DEFAULT, 'Chrono Trigger', '1995-03-11', 'RPG');




