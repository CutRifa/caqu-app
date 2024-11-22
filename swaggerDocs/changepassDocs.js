/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoint untuk otentikasi, termasuk perubahan kata sandi
 */

/**
 * @swagger
 * /change:
 *   post:
 *     summary: Mengubah kata sandi pengguna
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 example: "old-password-example"
 *               newPassword:
 *                 type: string
 *                 example: "new-password-example"
 *     responses:
 *       200:
 *         description: Kata sandi berhasil diubah
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password berhasil diubah"
 *       400:
 *         description: Salah satu atau kedua kata sandi tidak valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Kata sandi baru harus minimal 8 karakter"
 *       404:
 *         description: Pengguna tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User tidak ditemukan"
 *       401:
 *         description: Pengguna tidak terotentikasi dengan token yang valid
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Terjadi kesalahan pada server."
 */
