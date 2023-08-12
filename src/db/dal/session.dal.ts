import Session, { SessionInput, SessionOutput } from '../models/Session.model';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
  const session = await Session.create(payload);
  return session;
};

export const update = async (
  id: number,
  payload: Partial<SessionInput>
): Promise<SessionOutput> => {
  const session = await Session.findByPk(id);
  if (!Session) {
    throw new Error('not found');
  }
  const updatedSession = await (session as Session).update(payload);
  return updatedSession;
};

export const getById = async (id: number): Promise<SessionOutput> => {
  const session = await Session.findByPk(id);
  if (!session) {
    throw new Error('not found');
  }
  return session;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedSessionCount = await Session.destroy({
    where: { user_id: id }
  });
  return !!deletedSessionCount;
};

export const getAll = async (): Promise<SessionOutput[]> => {
  return Session.findAll();
};
