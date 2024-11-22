/**
 * @swagger
 * tags:
 *   name: Logout
 *   description: Endpoint untuk keluar dari akun pengguna
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Keluar dari akun pengguna
 *     tags: [Logout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username pengguna yang ingin logout
 *                 example: johndoe
 *     responses:
 *       200:
 *         description: Berhasil logout akun
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Logout berhasil.
 *       400:
 *         description: Pengguna tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: User tidak ditemukan.
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Terjadi kesalahan pada server.
 */

