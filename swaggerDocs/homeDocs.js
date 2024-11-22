/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Endpoint untuk mendapatkan halaman Home
 */

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Mendapatkan halaman Home
 *     tags: [Home]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan halaman Home
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Selamat datang di halaman Home!
 *       401:
 *         description: Token tidak valid atau tidak ada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Access denied
 *       500:
 *         description: Internal server error
 */
