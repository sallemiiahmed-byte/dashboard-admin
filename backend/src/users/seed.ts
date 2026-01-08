import { DataSource } from 'typeorm';
import { User, UserRole, UserStatus } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

export async function seedUsers(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);

  // Vérifier si un admin existe déjà
  const existingAdmin = await userRepository.findOne({
    where: { email: 'admin@example.com' },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const admin = userRepository.create({
      email: 'admin@example.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
    });

    await userRepository.save(admin);
    console.log('✅ Utilisateur admin créé: admin@example.com / admin123');
  } else {
    console.log('ℹ️  Utilisateur admin existe déjà');
  }
}

