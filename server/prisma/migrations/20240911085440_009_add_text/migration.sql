-- AlterTable
ALTER TABLE `Post` ADD COLUMN `views` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Session` MODIFY `data` TEXT NOT NULL;
