# KingChess

Aplicación de ejemplo construida con React y Vite para jugar partidas de ajedrez entre dos personas.

## Requisitos

- Node.js 20 o superior.

## Instalación de dependencias

```bash
npm install
```

## Arrancar el cliente

Inicia la versión de desarrollo ejecutando:

```bash
npm run dev
```

Esto levanta Vite y sirve el cliente de React en `http://localhost:5173` por defecto.

## Iniciar el servidor

Si el proyecto incluye un servidor de Node, arráncalo con:

```bash
node server/index.js
```

## Flujo de lobby y partida

1. Al abrir la aplicación los jugadores acceden a un lobby donde pueden esperar a que otro usuario se conecte.
2. Una vez hay dos jugadores en el lobby, se crea la partida y ambos clientes cargan el tablero.
3. Cada movimiento se envía al servidor y éste lo transmite al rival para mantener la partida sincronizada.
4. Al finalizar la partida (jaque mate, tablas o rendición) los jugadores pueden volver al lobby para iniciar un nuevo juego.
