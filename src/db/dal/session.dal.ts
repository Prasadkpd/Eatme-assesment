import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Session, { SessionInput, SessionOutput } from '../models/Session.model';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
  const session_id = uuidv4();
  const session = await Session.create({ ...payload, session_id });
  return session;
};

export const update = async (
  id: string,
  payload: Partial<SessionInput>
): Promise<SessionOutput> => {
  const session = await Session.findByPk(id);
  if (!Session) {
    throw new Error('not found');
  }
  const updatedSession = await (session as Session).update(payload);
  return updatedSession;
};

export const getById = async (id: string): Promise<SessionOutput> => {
  const session = await Session.findByPk(id);
  if (!session) {
    throw new Error('not found');
  }
  return session;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedSessionCount = await Session.destroy({
    where: { user_id: id }
  });
  return !!deletedSessionCount;
};

export const getAll = async (): Promise<SessionOutput[]> => {
  return Session.findAll();
};

export const getByUserId = async (user_id: string): Promise<SessionOutput[]> => {
  const sessions = await Session.findAll({
    where: {
      user_id: {
        [Op.eq]: user_id
      },
      valid: {
        [Op.eq]: true
      }
    }
  });

  return sessions;
};
