/**
 * @swagger
 * tags:
 *   name: ResetPassword
 *   description: Endpoint untuk mengatur proses reset password, termasuk mengirim email verifikasi dan melakukan reset password
 */

/**
 * @swagger
 * paths:
 *   /forgot-password:
 *     post:
 *       summary: Mengirim email untuk mereset password
 *       description: Mengirimkan email dengan tautan reset password ke email pengguna yang diminta
 *       tags: [ResetPassword]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *       responses:
 *         200:
 *           description: Tautan reset password berhasil dikirim
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Tautan reset password telah dikirim ke email Anda."
 *         404:
 *           description: Email tidak ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Email tidak ditemukan"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Terjadi kesalahan pada server."
 *                   error:
 *                     type: string
 *                     example: "Error message"
 *   
 *   /reset-password/{token}:
 *     put:
 *       summary: Mereset password pengguna
 *       description: Mengubah password pengguna berdasarkan token reset password yang valid
 *       tags: [ResetPassword]
 *       parameters:
 *         - name: token
 *           in: path
 *           required: true
 *           description: Token verifikasi reset password
 *           schema:
 *             type: string
 *             example: "abcdef123456"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 newPassword:
 *                   type: string
 *                   example: "newPassword123"
 *       responses:
 *         200:
 *           description: Password berhasil diubah
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Password berhasil diubah."
 *         400:
 *           description: Token telah kedaluwarsa atau tidak valid
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Token sudah kedaluwarsa."
 *         404:
 *           description: Email tidak ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Email tidak ditemukan"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Terjadi kesalahan pada server."
 *                   error:
 *                     type: string
 *                     example: "Error message"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResetPasswordRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "user@example.com"
 *     ResetPasswordResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Tautan reset password telah dikirim ke email Anda."
 *     ResetPasswordBody:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "user@example.com"
 *         newPassword:
 *           type: string
 *           example: "newPassword123"
 *     ResetPasswordError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Email tidak ditemukan"
 *         error:
 *           type: string
 *           example: "Error message"
 */
