import * as SessionDal from '../db/dal/session.dal';
import { SessionInput, SessionOutput } from '../db/models/Session.model';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
  const createdSession = SessionDal.create(payload);
  return createdSession;
};

export const update = (id: number, payload: Partial<SessionInput>): Promise<SessionOutput> => {
  return SessionDal.update(id, payload);
};

export const getById = (id: number): Promise<SessionOutput> => {
  return SessionDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return SessionDal.deleteById(id);
};

export const getAll = (): Promise<SessionOutput[]> => {
  return SessionDal.getAll();
};
