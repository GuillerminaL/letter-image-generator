import fs from 'fs';
import path from 'path';

function renameJsToCjs(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            renameJsToCjs(fullPath);
        } else if (path.extname(fullPath) === '.js') {
            const newFullPath = fullPath.replace(/\.js$/, '.cjs');
            fs.renameSync(fullPath, newFullPath);
        }
    });
}

renameJsToCjs(path.join('dist', 'cjs'));
