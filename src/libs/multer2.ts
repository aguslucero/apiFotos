import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads2',
    filename: (req, file, cb) => {
        cb(null, file.originalname );
    }
});

export default multer({storage});