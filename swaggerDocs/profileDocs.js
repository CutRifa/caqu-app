/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Endpoint untuk mengelola gambar profil pengguna
 */

/**
 * @swagger
 * /upload-profile:
 *   post:
 *     summary: Mengunggah foto profil pengguna
 *     tags: [Profile]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: File gambar yang akan diunggah sebagai foto profil
 *     responses:
 *       200:
 *         description: Foto profil berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Foto profil berhasil diupdate"
 *                 profilePictureUrl:
 *                   type: string
 *                   example: "https://storage.googleapis.com/bucket_name/file_name"
 *       400:
 *         description: Tidak ada file yang diunggah atau kesalahan validasi lainnya
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No file uploaded"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error uploading file"
 */

/**
 * @swagger
 * /profile-picture/{userId}:
 *   get:
 *     summary: Mengambil foto profil pengguna
 *     tags: [Profile]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID pengguna untuk mendapatkan foto profil
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Foto profil ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profilePictureUrl:
 *                   type: string
 *                   example: "https://storage.googleapis.com/bucket_name/file_name"
 *       404:
 *         description: Foto profil tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profile picture not found"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
