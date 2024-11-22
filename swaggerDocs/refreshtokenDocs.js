/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoint untuk otentikasi, termasuk refresh token
 */

/**
 * @swagger
 * /refresh:
 *   post:
 *     summary: Memperbarui token akses menggunakan refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 example: "refresh-token-example"
 *     responses:
 *       200:
 *         description: Token berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Token berhasil diperbarui"
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 accessToken:
 *                   type: string
 *                   example: "new-access-token-example"
 *       400:
 *         description: Token tidak valid atau ada kesalahan dalam proses verifikasi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token tidak valid"
 *       401:
 *         description: Pengguna tidak terautentikasi atau token kadaluarsa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token kadaluarsa atau tidak valid"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
