-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2019 a las 21:18:42
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sysmed`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `con_cita`
--

CREATE TABLE `con_cita` (
  `idcita` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `idempleado` bigint(20) NOT NULL,
  `fecha` text COLLATE utf8_bin NOT NULL,
  `motivo` text COLLATE utf8_bin NOT NULL,
  `fecha_cita` text COLLATE utf8_bin NOT NULL,
  `hora_cita` text COLLATE utf8_bin NOT NULL,
  `estado_cita` text COLLATE utf8_bin NOT NULL,
  `referencia` text COLLATE utf8_bin NOT NULL,
  `comentario` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `con_consulta`
--

CREATE TABLE `con_consulta` (
  `idconsulta` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `idempleado` bigint(20) NOT NULL,
  `referencia` text COLLATE utf8_bin NOT NULL,
  `fecha` text COLLATE utf8_bin NOT NULL,
  `tipo_paciente` text COLLATE utf8_bin NOT NULL,
  `comentario` text COLLATE utf8_bin NOT NULL,
  `diagnostico` text COLLATE utf8_bin NOT NULL,
  `receta_medica` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `con_facturacion`
--

CREATE TABLE `con_facturacion` (
  `idfacturacion` bigint(20) NOT NULL,
  `numero` int(11) NOT NULL,
  `fecha` varchar(50) COLLATE utf8_bin NOT NULL,
  `idconsulta` bigint(20) NOT NULL,
  `ars` varchar(100) COLLATE utf8_bin NOT NULL,
  `comentario` varchar(100) COLLATE utf8_bin NOT NULL,
  `monto` varchar(150) COLLATE utf8_bin NOT NULL,
  `no_poliza` varchar(150) COLLATE utf8_bin NOT NULL,
  `no_reclamacion` int(150) NOT NULL,
  `monto_cobertura` varchar(150) COLLATE utf8_bin NOT NULL,
  `total_factura` varchar(150) COLLATE utf8_bin NOT NULL,
  `condicion_pago` varchar(160) COLLATE utf8_bin NOT NULL,
  `total_recibido` varchar(200) COLLATE utf8_bin NOT NULL,
  `no_referencia` varchar(200) COLLATE utf8_bin NOT NULL,
  `total_devuelto` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eme_admision`
--

CREATE TABLE `eme_admision` (
  `idadmision` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `motivo` text COLLATE utf8_bin,
  `triaje` tinyint(1) NOT NULL,
  `fechaEntrada` text COLLATE utf8_bin,
  `parentesco` text COLLATE utf8_bin,
  `nombre_pariente` text COLLATE utf8_bin,
  `direccion_pariente` text COLLATE utf8_bin,
  `telefono_pariente` text COLLATE utf8_bin,
  `celular_pariente` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eme_evaluacion`
--

CREATE TABLE `eme_evaluacion` (
  `idevaluacion` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `idadmision` bigint(20) NOT NULL,
  `enfermedad` text COLLATE utf8_bin NOT NULL,
  `examen_fisico` text COLLATE utf8_bin NOT NULL,
  `presion_alterial` text COLLATE utf8_bin NOT NULL,
  `fre_cardiaca` text COLLATE utf8_bin NOT NULL,
  `fre_respiratoria` text COLLATE utf8_bin NOT NULL,
  `sat_oxigeno` text COLLATE utf8_bin NOT NULL,
  `temp_axilar` text COLLATE utf8_bin NOT NULL,
  `peso` text COLLATE utf8_bin NOT NULL,
  `diagnosticoE` text COLLATE utf8_bin NOT NULL,
  `tratamientoE` text COLLATE utf8_bin NOT NULL,
  `medicamento` text COLLATE utf8_bin NOT NULL,
  `pruebas` text COLLATE utf8_bin NOT NULL,
  `estudios` text COLLATE utf8_bin NOT NULL,
  `fecha` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eme_referencia`
--

CREATE TABLE `eme_referencia` (
  `idreferencia` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `idempleado` bigint(20) NOT NULL,
  `alta` text COLLATE utf8_bin NOT NULL,
  `dias_incapacidad` text COLLATE utf8_bin NOT NULL,
  `diagnostico_def` text COLLATE utf8_bin NOT NULL,
  `consejo` text COLLATE utf8_bin NOT NULL,
  `referimiento` text COLLATE utf8_bin NOT NULL,
  `anamnesis` text COLLATE utf8_bin NOT NULL,
  `diagnosticoR` text COLLATE utf8_bin NOT NULL,
  `evolucion` text COLLATE utf8_bin NOT NULL,
  `examen_fisicoR` text COLLATE utf8_bin NOT NULL,
  `tratamientoR` text COLLATE utf8_bin NOT NULL,
  `motivo` text COLLATE utf8_bin NOT NULL,
  `condicionesR` text COLLATE utf8_bin NOT NULL,
  `fecha` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `idempleado` bigint(20) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_bin NOT NULL,
  `Direccion` varchar(70) COLLATE utf8_bin NOT NULL,
  `Identificacion` varchar(25) COLLATE utf8_bin NOT NULL,
  `TipoIdentificacion` bit(1) NOT NULL,
  `Sexo` varchar(15) COLLATE utf8_bin NOT NULL,
  `TipoSangre` varchar(20) COLLATE utf8_bin NOT NULL,
  `idars` bigint(20) NOT NULL,
  `NumSeguroSocial` int(11) NOT NULL,
  `Area` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Cargo` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Escolaridad` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Departamento` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Especialidad` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `FechaEntrada` date NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Correo` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `Experiencia` int(11) DEFAULT NULL,
  `Tipo` varchar(50) COLLATE utf8_bin NOT NULL,
  `Estado` varchar(1) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`idempleado`, `Nombre`, `Apellido`, `Direccion`, `Identificacion`, `TipoIdentificacion`, `Sexo`, `TipoSangre`, `idars`, `NumSeguroSocial`, `Area`, `Cargo`, `Escolaridad`, `Departamento`, `Especialidad`, `FechaEntrada`, `FechaNacimiento`, `Correo`, `Experiencia`, `Tipo`, `Estado`) VALUES
(1, 'PEDRO', 'INFANTE', 'EN SU CASA', '000-000000000-0', b'1', 'HOMBRE', 'A+', 5, 11, 'INFORMATICA', 'BRECHERO', 'BACHILLER', 'INFORMATICA', 'VER PORNO', '2019-11-29', '2019-11-28', 'INFO@CORREO.COM', 1, 'MAESTRO CONSTRUCTOR', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_ars`
--

CREATE TABLE `lab_ars` (
  `idars_lab` bigint(20) NOT NULL,
  `nombre_labars` varchar(35) COLLATE utf8_bin NOT NULL,
  `estado_labars` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `lab_ars`
--

INSERT INTO `lab_ars` (`idars_lab`, `nombre_labars`, `estado_labars`) VALUES
(1, 'ARS Universal', b'1'),
(2, 'Primera ARS de Humano', b'1'),
(3, 'ARS Palic Salud', b'1'),
(4, 'ARS Monumental', b'1'),
(5, 'ARS SeNaSa', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_citologiavaginal`
--

CREATE TABLE `lab_citologiavaginal` (
  `linea_labrcvaginal` bigint(20) NOT NULL,
  `numvmaterial_labrcvaginal` decimal(1,0) NOT NULL,
  `detvmaterial_labrcvaginal` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `microorganismo_labrcvaginal` varchar(9) COLLATE utf8_bin NOT NULL,
  `numhallazgo_labrcvaginal` decimal(1,0) NOT NULL,
  `altescamosa_labrcvaginal` varchar(7) COLLATE utf8_bin NOT NULL,
  `altglandulares` decimal(1,0) NOT NULL,
  `numhormonal_labrcvaginal` decimal(1,0) NOT NULL,
  `dethormonal_labrcvaginal` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `resultado_labrcvaginal` varchar(25) COLLATE utf8_bin NOT NULL,
  `idprueba_labprueba` bigint(20) NOT NULL,
  `idresultado_labresultado` bigint(20) NOT NULL,
  `idempleado_empleado` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_condicionpago`
--

CREATE TABLE `lab_condicionpago` (
  `linea_labconpago` bigint(20) NOT NULL,
  `idfactura_labfactura` bigint(20) NOT NULL,
  `monefectivo_labcpago` varchar(5) COLLATE utf8_bin DEFAULT NULL,
  `montcredito_labcpago` decimal(12,2) DEFAULT NULL,
  `numtcredito_labcpago` decimal(20,0) DEFAULT NULL,
  `montdebito_labcpago` decimal(12,2) DEFAULT NULL,
  `numtdebito_labcpago` decimal(20,0) DEFAULT NULL,
  `moncheque_labcpago` decimal(12,2) DEFAULT NULL,
  `numcheque_labcpago` decimal(20,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_departamento`
--

CREATE TABLE `lab_departamento` (
  `iddepartamento_lab` bigint(20) NOT NULL,
  `nombre_labdepartamento` varchar(35) COLLATE utf8_bin NOT NULL,
  `estado_labdepartamento` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `lab_departamento`
--

INSERT INTO `lab_departamento` (`iddepartamento_lab`, `nombre_labdepartamento`, `estado_labdepartamento`) VALUES
(1, 'Hematología', b'1'),
(2, 'Uroanálisis', b'1'),
(3, 'Pruebas Especiales', b'1'),
(4, 'Citología Vaginal', b'1'),
(5, 'Biopsia', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_detallefactura`
--

CREATE TABLE `lab_detallefactura` (
  `linea_labdfactura` bigint(20) NOT NULL,
  `idfactura_labfactura` bigint(20) NOT NULL,
  `idprueba_labprueba` bigint(20) NOT NULL,
  `cantidad_labdfactura` decimal(3,0) NOT NULL,
  `precio_labdfactura` decimal(12,2) NOT NULL,
  `monto_labdfactura` decimal(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_detalleresultado`
--

CREATE TABLE `lab_detalleresultado` (
  `linea_labdresultado` bigint(20) NOT NULL,
  `resultado_labdresultado` decimal(3,2) NOT NULL,
  `idmuestra_labmuestra` bigint(20) NOT NULL,
  `idresultado_labresultado` bigint(20) NOT NULL,
  `idempleado_empleado` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_factura`
--

CREATE TABLE `lab_factura` (
  `idfactura_lab` bigint(20) NOT NULL,
  `numero_labfactura` decimal(12,0) NOT NULL,
  `tipo_labfactura` bit(1) NOT NULL,
  `fecha_labfactura` date NOT NULL,
  `idempleado` bigint(20) NOT NULL,
  `idpaciente_paciente` bigint(20) NOT NULL,
  `idars_labars` bigint(20) DEFAULT NULL,
  `numpoliza_labfactura` decimal(20,0) DEFAULT NULL,
  `numreclamacion_labfactura` decimal(20,0) DEFAULT NULL,
  `monreclamacion_labfactura` decimal(12,2) DEFAULT NULL,
  `cobertura_labfactura` decimal(12,2) DEFAULT NULL,
  `total_labfactura` decimal(12,2) NOT NULL,
  `montopagado_labfacura` decimal(10,0) NOT NULL,
  `idncf_labfactura` bigint(20) NOT NULL,
  `numncf_labfactura` varchar(12) COLLATE utf8_bin NOT NULL,
  `fechancf_labfactura` date NOT NULL,
  `estado_labfactura` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_muestra`
--

CREATE TABLE `lab_muestra` (
  `idmuestra_lab` bigint(20) NOT NULL,
  `nombre_labmuestra` varchar(25) COLLATE utf8_bin NOT NULL,
  `detalle_labmuestra` varchar(35) COLLATE utf8_bin DEFAULT NULL,
  `idprueba_labprueba` bigint(20) NOT NULL,
  `idumedida_labnidadmedida` bigint(20) NOT NULL,
  `vminimo_labmuestra` decimal(3,2) NOT NULL,
  `vmaximo_labmuestra` decimal(3,2) NOT NULL,
  `estado_labmuestra` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_ncf`
--

CREATE TABLE `lab_ncf` (
  `idncf_lab` bigint(20) NOT NULL,
  `nombre_labncf` varchar(35) COLLATE utf8_bin NOT NULL,
  `abreviatura_labncf` varchar(5) COLLATE utf8_bin NOT NULL,
  `fechaven_labncf` date NOT NULL,
  `cantidad_labncf` smallint(4) NOT NULL,
  `prisecuencia_labncf` int(11) NOT NULL,
  `ultsecuencia_labncf` int(11) NOT NULL,
  `estado_labncf` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `lab_ncf`
--

INSERT INTO `lab_ncf` (`idncf_lab`, `nombre_labncf`, `abreviatura_labncf`, `fechaven_labncf`, `cantidad_labncf`, `prisecuencia_labncf`, `ultsecuencia_labncf`, `estado_labncf`) VALUES
(1, 'Factura de Crédito Fiscal', 'B01', '2019-12-31', 1000, 0, 0, b'1'),
(2, 'Factura de Consumo', 'B02', '2019-12-31', 1000, 0, 0, b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_prueba`
--

CREATE TABLE `lab_prueba` (
  `idprueba_lab` bigint(20) NOT NULL,
  `nombre_labprueba` varchar(35) COLLATE utf8_bin NOT NULL,
  `estado_labprueba` bit(1) NOT NULL,
  `iddepartamento_labdepartamento` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_resultado`
--

CREATE TABLE `lab_resultado` (
  `idresultado` bigint(20) NOT NULL,
  `fecha_labresultado` date NOT NULL,
  `idfactura_labfactura` bigint(20) NOT NULL,
  `idpaciente_paciente` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_resultadobiopsia`
--

CREATE TABLE `lab_resultadobiopsia` (
  `linea_labrbiopsia` bigint(20) NOT NULL,
  `idempleado_empleado` bigint(20) NOT NULL,
  `desmacroscopica_labrbiopsia` varchar(60) COLLATE utf8_bin NOT NULL,
  `desmicroscopica_labrbiopsia` varchar(60) COLLATE utf8_bin NOT NULL,
  `diagnostico_labrbiopsia` varchar(40) COLLATE utf8_bin NOT NULL,
  `resultado` varchar(30) COLLATE utf8_bin NOT NULL,
  `idprueba_labprueba` bigint(20) NOT NULL,
  `idresultado_labresultado` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_unidadmedida`
--

CREATE TABLE `lab_unidadmedida` (
  `idumedida_lab` bigint(20) NOT NULL,
  `nombre_labumedida` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `abv_labumedida` varchar(15) COLLATE utf8_bin NOT NULL,
  `detalle_labumedida` varchar(30) COLLATE utf8_bin DEFAULT 'NULL',
  `estado_labumedida` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nut_asignaciondieta`
--

CREATE TABLE `nut_asignaciondieta` (
  `idasiganciondieta` int(11) NOT NULL,
  `idtipodieta` bigint(20) NOT NULL,
  `idpaciente` bigint(20) NOT NULL,
  `idempleado` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nut_dieta`
--

CREATE TABLE `nut_dieta` (
  `iddieta` bigint(20) UNSIGNED NOT NULL,
  `idtipodieta` bigint(20) NOT NULL,
  `descripcion` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `dia` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `tanda` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nut_tipodieta`
--

CREATE TABLE `nut_tipodieta` (
  `idtipodieta` bigint(20) NOT NULL,
  `nombre` varchar(59) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `idpaciente` bigint(20) NOT NULL,
  `Nombre` varchar(60) COLLATE utf8_bin NOT NULL,
  `Apellido` varchar(60) COLLATE utf8_bin NOT NULL,
  `Direccion` varchar(60) COLLATE utf8_bin NOT NULL,
  `Identificacion` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `TipoIdentificacion` bit(1) DEFAULT NULL,
  `Sexo` varchar(25) COLLATE utf8_bin NOT NULL,
  `TipoSangre` varchar(25) COLLATE utf8_bin NOT NULL,
  `idars` bigint(20) NOT NULL,
  `NumSeguroSocial` int(11) NOT NULL,
  `AntecedenteFamiliares` varchar(250) COLLATE utf8_bin NOT NULL,
  `Alergia/Afeccion` varchar(250) COLLATE utf8_bin NOT NULL,
  `FechaEntrada` date NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Familiar/Tutor` varchar(100) COLLATE utf8_bin NOT NULL,
  `Estado` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono`
--

CREATE TABLE `telefono` (
  `idtelefonoempleado` bigint(20) NOT NULL,
  `telefono` varchar(15) COLLATE utf8_bin NOT NULL,
  `idempleado` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` bigint(20) NOT NULL,
  `idempleado` bigint(20) NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(15) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `con_cita`
--
ALTER TABLE `con_cita`
  ADD PRIMARY KEY (`idcita`),
  ADD UNIQUE KEY `idcitaind` (`idcita`) USING BTREE,
  ADD KEY `idempleado` (`idempleado`),
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `con_consulta`
--
ALTER TABLE `con_consulta`
  ADD PRIMARY KEY (`idconsulta`),
  ADD UNIQUE KEY `idconsultaind` (`idconsulta`) USING BTREE,
  ADD KEY `idempleado` (`idempleado`),
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `con_facturacion`
--
ALTER TABLE `con_facturacion`
  ADD PRIMARY KEY (`idfacturacion`),
  ADD UNIQUE KEY `idfacturacionind` (`idfacturacion`) USING BTREE,
  ADD KEY `idconsulta` (`idconsulta`);

--
-- Indices de la tabla `eme_admision`
--
ALTER TABLE `eme_admision`
  ADD PRIMARY KEY (`idadmision`),
  ADD UNIQUE KEY `idadmisionind` (`idadmision`) USING BTREE,
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `eme_evaluacion`
--
ALTER TABLE `eme_evaluacion`
  ADD PRIMARY KEY (`idevaluacion`),
  ADD UNIQUE KEY `idevaluacionind` (`idevaluacion`) USING BTREE,
  ADD KEY `idpaciente` (`idpaciente`),
  ADD KEY `idadmision` (`idadmision`);

--
-- Indices de la tabla `eme_referencia`
--
ALTER TABLE `eme_referencia`
  ADD PRIMARY KEY (`idreferencia`),
  ADD UNIQUE KEY `idreferenciaind` (`idreferencia`) USING BTREE,
  ADD KEY `idempleado` (`idempleado`),
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`idempleado`),
  ADD UNIQUE KEY `idempleadoind` (`idempleado`) USING BTREE,
  ADD KEY `idars` (`idars`);

--
-- Indices de la tabla `lab_ars`
--
ALTER TABLE `lab_ars`
  ADD PRIMARY KEY (`idars_lab`),
  ADD UNIQUE KEY `idars_lab` (`idars_lab`);

--
-- Indices de la tabla `lab_citologiavaginal`
--
ALTER TABLE `lab_citologiavaginal`
  ADD PRIMARY KEY (`linea_labrcvaginal`),
  ADD UNIQUE KEY `linea_labrcvaginal` (`linea_labrcvaginal`),
  ADD KEY `FK` (`idempleado_empleado`,`idprueba_labprueba`,`idresultado_labresultado`),
  ADD KEY `idprueba_labprueba` (`idprueba_labprueba`),
  ADD KEY `idresultado_labresultado` (`idresultado_labresultado`);

--
-- Indices de la tabla `lab_condicionpago`
--
ALTER TABLE `lab_condicionpago`
  ADD PRIMARY KEY (`linea_labconpago`),
  ADD UNIQUE KEY `linea_labconpago` (`linea_labconpago`),
  ADD KEY `FK` (`idfactura_labfactura`);

--
-- Indices de la tabla `lab_departamento`
--
ALTER TABLE `lab_departamento`
  ADD PRIMARY KEY (`iddepartamento_lab`),
  ADD UNIQUE KEY `iddepartamento_lab` (`iddepartamento_lab`);

--
-- Indices de la tabla `lab_detallefactura`
--
ALTER TABLE `lab_detallefactura`
  ADD PRIMARY KEY (`linea_labdfactura`),
  ADD UNIQUE KEY `linea_labdfactura` (`linea_labdfactura`),
  ADD KEY `FK` (`idfactura_labfactura`,`idprueba_labprueba`),
  ADD KEY `idprueba_labprueba` (`idprueba_labprueba`);

--
-- Indices de la tabla `lab_detalleresultado`
--
ALTER TABLE `lab_detalleresultado`
  ADD PRIMARY KEY (`linea_labdresultado`),
  ADD UNIQUE KEY `linea_labdresultado` (`linea_labdresultado`),
  ADD KEY `FK` (`idmuestra_labmuestra`,`idresultado_labresultado`,`idempleado_empleado`),
  ADD KEY `idempleado_empleado` (`idempleado_empleado`),
  ADD KEY `idresultado_labresultado` (`idresultado_labresultado`);

--
-- Indices de la tabla `lab_factura`
--
ALTER TABLE `lab_factura`
  ADD PRIMARY KEY (`idfactura_lab`),
  ADD UNIQUE KEY `idfactura_lab` (`idfactura_lab`),
  ADD KEY `FK` (`idars_labars`,`idpaciente_paciente`,`idempleado`,`idncf_labfactura`) USING BTREE,
  ADD KEY `idempleado` (`idempleado`),
  ADD KEY `idncf_labfactura` (`idncf_labfactura`),
  ADD KEY `idpaciente_paciente` (`idpaciente_paciente`);

--
-- Indices de la tabla `lab_muestra`
--
ALTER TABLE `lab_muestra`
  ADD PRIMARY KEY (`idmuestra_lab`),
  ADD UNIQUE KEY `idmuestra_lab` (`idmuestra_lab`),
  ADD KEY `FK` (`idprueba_labprueba`,`idumedida_labnidadmedida`),
  ADD KEY `idumedida_labnidadmedida` (`idumedida_labnidadmedida`);

--
-- Indices de la tabla `lab_ncf`
--
ALTER TABLE `lab_ncf`
  ADD PRIMARY KEY (`idncf_lab`),
  ADD UNIQUE KEY `idncf_lab` (`idncf_lab`);

--
-- Indices de la tabla `lab_prueba`
--
ALTER TABLE `lab_prueba`
  ADD PRIMARY KEY (`idprueba_lab`),
  ADD UNIQUE KEY `idprueba_lab` (`idprueba_lab`),
  ADD KEY `FK` (`iddepartamento_labdepartamento`);

--
-- Indices de la tabla `lab_resultado`
--
ALTER TABLE `lab_resultado`
  ADD PRIMARY KEY (`idresultado`),
  ADD UNIQUE KEY `idresultado` (`idresultado`),
  ADD KEY `idfactura_labfactura` (`idfactura_labfactura`),
  ADD KEY `idpaciente_paciente` (`idpaciente_paciente`);

--
-- Indices de la tabla `lab_resultadobiopsia`
--
ALTER TABLE `lab_resultadobiopsia`
  ADD PRIMARY KEY (`linea_labrbiopsia`),
  ADD UNIQUE KEY `linea_labrbiopsia` (`linea_labrbiopsia`),
  ADD KEY `FK` (`idempleado_empleado`,`idprueba_labprueba`,`idresultado_labresultado`),
  ADD KEY `idprueba_labprueba` (`idprueba_labprueba`),
  ADD KEY `lab_resultadobiopsia_ibfk_3` (`idresultado_labresultado`);

--
-- Indices de la tabla `lab_unidadmedida`
--
ALTER TABLE `lab_unidadmedida`
  ADD PRIMARY KEY (`idumedida_lab`),
  ADD UNIQUE KEY `idumedida_lab` (`idumedida_lab`);

--
-- Indices de la tabla `nut_asignaciondieta`
--
ALTER TABLE `nut_asignaciondieta`
  ADD PRIMARY KEY (`idasiganciondieta`),
  ADD KEY `idtipodieta` (`idtipodieta`),
  ADD KEY `idpaciente` (`idpaciente`),
  ADD KEY `idempleado` (`idempleado`);

--
-- Indices de la tabla `nut_dieta`
--
ALTER TABLE `nut_dieta`
  ADD PRIMARY KEY (`iddieta`),
  ADD UNIQUE KEY `idasiganciondieta` (`iddieta`),
  ADD KEY `nut_tipodieta_id` (`idtipodieta`);

--
-- Indices de la tabla `nut_tipodieta`
--
ALTER TABLE `nut_tipodieta`
  ADD PRIMARY KEY (`idtipodieta`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idpaciente`),
  ADD UNIQUE KEY `idpacienteind` (`idpaciente`) USING BTREE,
  ADD KEY `idars` (`idars`);

--
-- Indices de la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD PRIMARY KEY (`idtelefonoempleado`),
  ADD UNIQUE KEY `idtelefonoempleadoind` (`idtelefonoempleado`) USING BTREE,
  ADD KEY `telefonoempleado_ibfk_1` (`idempleado`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD UNIQUE KEY `idusuario` (`idusuario`),
  ADD KEY `idempleado` (`idempleado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `con_cita`
--
ALTER TABLE `con_cita`
  MODIFY `idcita` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `con_consulta`
--
ALTER TABLE `con_consulta`
  MODIFY `idconsulta` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `con_facturacion`
--
ALTER TABLE `con_facturacion`
  MODIFY `idfacturacion` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eme_admision`
--
ALTER TABLE `eme_admision`
  MODIFY `idadmision` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eme_evaluacion`
--
ALTER TABLE `eme_evaluacion`
  MODIFY `idevaluacion` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eme_referencia`
--
ALTER TABLE `eme_referencia`
  MODIFY `idreferencia` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `idempleado` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lab_ars`
--
ALTER TABLE `lab_ars`
  MODIFY `idars_lab` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `lab_citologiavaginal`
--
ALTER TABLE `lab_citologiavaginal`
  MODIFY `linea_labrcvaginal` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_condicionpago`
--
ALTER TABLE `lab_condicionpago`
  MODIFY `linea_labconpago` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_departamento`
--
ALTER TABLE `lab_departamento`
  MODIFY `iddepartamento_lab` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `lab_detallefactura`
--
ALTER TABLE `lab_detallefactura`
  MODIFY `linea_labdfactura` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_detalleresultado`
--
ALTER TABLE `lab_detalleresultado`
  MODIFY `linea_labdresultado` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_factura`
--
ALTER TABLE `lab_factura`
  MODIFY `idfactura_lab` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_muestra`
--
ALTER TABLE `lab_muestra`
  MODIFY `idmuestra_lab` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_ncf`
--
ALTER TABLE `lab_ncf`
  MODIFY `idncf_lab` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lab_resultado`
--
ALTER TABLE `lab_resultado`
  MODIFY `idresultado` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_resultadobiopsia`
--
ALTER TABLE `lab_resultadobiopsia`
  MODIFY `linea_labrbiopsia` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lab_unidadmedida`
--
ALTER TABLE `lab_unidadmedida`
  MODIFY `idumedida_lab` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nut_asignaciondieta`
--
ALTER TABLE `nut_asignaciondieta`
  MODIFY `idasiganciondieta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `nut_dieta`
--
ALTER TABLE `nut_dieta`
  MODIFY `iddieta` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nut_tipodieta`
--
ALTER TABLE `nut_tipodieta`
  MODIFY `idtipodieta` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `idpaciente` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `telefono`
--
ALTER TABLE `telefono`
  MODIFY `idtelefonoempleado` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `con_cita`
--
ALTER TABLE `con_cita`
  ADD CONSTRAINT `con_cita_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `con_cita_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `con_consulta`
--
ALTER TABLE `con_consulta`
  ADD CONSTRAINT `con_consulta_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `con_consulta_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `con_facturacion`
--
ALTER TABLE `con_facturacion`
  ADD CONSTRAINT `con_facturacion_ibfk_1` FOREIGN KEY (`idconsulta`) REFERENCES `con_consulta` (`idconsulta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `eme_admision`
--
ALTER TABLE `eme_admision`
  ADD CONSTRAINT `eme_admision_ibfk_1` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `eme_evaluacion`
--
ALTER TABLE `eme_evaluacion`
  ADD CONSTRAINT `eme_evaluacion_ibfk_1` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `eme_evaluacion_ibfk_2` FOREIGN KEY (`idadmision`) REFERENCES `eme_admision` (`idadmision`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `eme_referencia`
--
ALTER TABLE `eme_referencia`
  ADD CONSTRAINT `eme_referencia_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `eme_referencia_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`idars`) REFERENCES `lab_ars` (`idars_lab`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_citologiavaginal`
--
ALTER TABLE `lab_citologiavaginal`
  ADD CONSTRAINT `lab_citologiavaginal_ibfk_1` FOREIGN KEY (`idempleado_empleado`) REFERENCES `empleado` (`idempleado`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_citologiavaginal_ibfk_2` FOREIGN KEY (`idprueba_labprueba`) REFERENCES `lab_prueba` (`idprueba_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_citologiavaginal_ibfk_3` FOREIGN KEY (`idresultado_labresultado`) REFERENCES `lab_resultado` (`idresultado`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_condicionpago`
--
ALTER TABLE `lab_condicionpago`
  ADD CONSTRAINT `lab_condicionpago_ibfk_1` FOREIGN KEY (`idfactura_labfactura`) REFERENCES `lab_factura` (`idfactura_lab`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_detallefactura`
--
ALTER TABLE `lab_detallefactura`
  ADD CONSTRAINT `lab_detallefactura_ibfk_1` FOREIGN KEY (`idfactura_labfactura`) REFERENCES `lab_factura` (`idfactura_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_detallefactura_ibfk_2` FOREIGN KEY (`idprueba_labprueba`) REFERENCES `lab_prueba` (`idprueba_lab`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_detalleresultado`
--
ALTER TABLE `lab_detalleresultado`
  ADD CONSTRAINT `lab_detalleresultado_ibfk_1` FOREIGN KEY (`idempleado_empleado`) REFERENCES `empleado` (`idempleado`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_detalleresultado_ibfk_2` FOREIGN KEY (`idmuestra_labmuestra`) REFERENCES `lab_muestra` (`idmuestra_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_detalleresultado_ibfk_3` FOREIGN KEY (`idresultado_labresultado`) REFERENCES `lab_resultado` (`idresultado`);

--
-- Filtros para la tabla `lab_factura`
--
ALTER TABLE `lab_factura`
  ADD CONSTRAINT `lab_factura_ibfk_1` FOREIGN KEY (`idars_labars`) REFERENCES `lab_ars` (`idars_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_factura_ibfk_2` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_factura_ibfk_3` FOREIGN KEY (`idncf_labfactura`) REFERENCES `lab_ncf` (`idncf_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_factura_ibfk_4` FOREIGN KEY (`idpaciente_paciente`) REFERENCES `paciente` (`idpaciente`);

--
-- Filtros para la tabla `lab_muestra`
--
ALTER TABLE `lab_muestra`
  ADD CONSTRAINT `lab_muestra_ibfk_1` FOREIGN KEY (`idmuestra_lab`) REFERENCES `lab_muestra` (`idmuestra_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_muestra_ibfk_2` FOREIGN KEY (`idprueba_labprueba`) REFERENCES `lab_prueba` (`idprueba_lab`),
  ADD CONSTRAINT `lab_muestra_ibfk_3` FOREIGN KEY (`idumedida_labnidadmedida`) REFERENCES `lab_unidadmedida` (`idumedida_lab`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_prueba`
--
ALTER TABLE `lab_prueba`
  ADD CONSTRAINT `lab_prueba_ibfk_1` FOREIGN KEY (`iddepartamento_labdepartamento`) REFERENCES `lab_departamento` (`iddepartamento_lab`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_resultado`
--
ALTER TABLE `lab_resultado`
  ADD CONSTRAINT `lab_resultado_ibfk_1` FOREIGN KEY (`idfactura_labfactura`) REFERENCES `lab_factura` (`idfactura_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_resultado_ibfk_2` FOREIGN KEY (`idpaciente_paciente`) REFERENCES `paciente` (`idpaciente`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lab_resultadobiopsia`
--
ALTER TABLE `lab_resultadobiopsia`
  ADD CONSTRAINT `lab_resultadobiopsia_ibfk_1` FOREIGN KEY (`idempleado_empleado`) REFERENCES `empleado` (`idempleado`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_resultadobiopsia_ibfk_2` FOREIGN KEY (`idprueba_labprueba`) REFERENCES `lab_prueba` (`idprueba_lab`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `lab_resultadobiopsia_ibfk_3` FOREIGN KEY (`idresultado_labresultado`) REFERENCES `lab_resultado` (`idresultado`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `nut_asignaciondieta`
--
ALTER TABLE `nut_asignaciondieta`
  ADD CONSTRAINT `nut_asignaciondieta_ibfk_1` FOREIGN KEY (`idtipodieta`) REFERENCES `nut_tipodieta` (`idtipodieta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `nut_asignaciondieta_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `paciente` (`idpaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `nut_asignaciondieta_ibfk_3` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `nut_dieta`
--
ALTER TABLE `nut_dieta`
  ADD CONSTRAINT `nut_tipodieta_id` FOREIGN KEY (`idtipodieta`) REFERENCES `nut_tipodieta` (`idtipodieta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `paciente_ibfk_1` FOREIGN KEY (`idars`) REFERENCES `lab_ars` (`idars_lab`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD CONSTRAINT `telefono_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
