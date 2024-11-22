/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Endpoint untuk mengambil pertanyaan kuis, mengirim jawaban, dan memeriksa status kuis
 */

/**
 * @swagger
 * paths:
 *   /question/{number}:
 *     get:
 *       summary: Mendapatkan pertanyaan berdasarkan nomor
 *       tags: [Quiz]
 *       parameters:
 *         - name: number
 *           in: path
 *           required: true
 *           description: Nomor pertanyaan yang ingin diambil
 *           schema:
 *             type: integer
 *             example: 1
 *       responses:
 *         200:
 *           description: Pertanyaan ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   question:
 *                     type: string
 *                     example: "Apa tujuan karir Anda?"
 *                   questionNumber:
 *                     type: integer
 *                     example: 1
 *         400:
 *           description: Nomor pertanyaan tidak valid
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Nomor pertanyaan harus berupa angka."
 *         404:
 *           description: Pertanyaan tidak ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Pertanyaan tidak ditemukan."
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
 *   
 *   /answer:
 *     post:
 *       summary: Mengirim jawaban untuk pertanyaan
 *       tags: [Quiz]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 question_id:
 *                   type: integer
 *                   example: 1
 *                 answer:
 *                   type: string
 *                   example: "Saya ingin menjadi Software Engineer."
 *       responses:
 *         200:
 *           description: Jawaban berhasil diperbarui
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: "Jawaban berhasil diperbarui"
 *         201:
 *           description: Jawaban berhasil disimpan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: "Jawaban berhasil disimpan"
 *         400:
 *           description: Bad request jika data tidak lengkap
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Data pertanyaan atau jawaban tidak valid"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Terjadi kesalahan saat menyimpan jawaban."
 *   
 *   /quiz-status:
 *     get:
 *       summary: Mendapatkan status kuis (pertanyaan yang telah dijawab dan belum dijawab)
 *       tags: [Quiz]
 *       responses:
 *         200:
 *           description: Status kuis berhasil diambil
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: "Status kuis berhasil diambil."
 *                   quizStatus:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         questionId:
 *                           type: integer
 *                           example: 1
 *                         questionText:
 *                           type: string
 *                           example: "Apa tujuan karir Anda?"
 *                         answered:
 *                           type: boolean
 *                           example: true
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Terjadi kesalahan saat mengambil data status kuis."
 *   
 *   /submit:
 *     post:
 *       summary: Mengirim jawaban kuis dan mendapatkan rekomendasi karir
 *       tags: [Quiz]
 *       responses:
 *         200:
 *           description: Rekomendasi karir berhasil dibuat
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Rekomendasi karir berhasil dibuat."
 *                   recommendedCareer:
 *                     type: string
 *                     example: "Software Engineer"
 *         500:
 *           description: Terjadi kesalahan saat mengirimkan jawaban kuis
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Terjadi kesalahan saat mengirimkan jawaban kuis."
 */
