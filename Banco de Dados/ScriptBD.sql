create database JogosRetro;
use JogosRetro;

create table Usuario(
idUsuario int primary key,
dtHoraCadastro datetime not null default current_timestamp);

create table Jogo(
idJogo int primary key,
titulo varchar(45) not null,
dtLancamento date not null,
genero varchar(45) not null
);

create table RespostasQuiz(
idRespostasQuiz int primary key,
dtHorarioQuiz datetime not null default current_timestamp,
resposta1 varchar(45) not null,
resposta2 varchar(45) not null,
resposta3 varchar(45) not null,
resposta4 varchar(45) not null,
resposta5 varchar(45) not null,
resposta6 varchar(45) not null,
fkUsuario int,
fkJogo int not null,
constraint fkRespostasQuizUsuario
	foreign key (fkUsuario) references Usuario(idUsuario),
constraint fkRespostaQuizJogo
	foreign key (fkJogo) references Jogo(idJogo)
);
