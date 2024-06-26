import { Router } from 'express';
import { RefreshTokensController } from '../controllers';

const refreshTokenRoutes = Router();

refreshTokenRoutes.post('/refresh_token', RefreshTokensController.getTokens);

export { refreshTokenRoutes };
