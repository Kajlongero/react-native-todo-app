import { create } from 'zustand';

export const useGoalStore = create((set) => ({
  goals: [],
  goalsFiltered: [],
  newGoalText: '',
  modalNewGoalOpen: false,
  modalDeleteGoalOpen: false, 
  handleNewGoalText: (t) => set((state) => ({ newGoalText: t })),
  handleFilterList: (t) => set((state) => ({ goalsFiltered: [...state.goals.filter((g) => g.text.toLowerCase().includes(t.toLowerCase()))] })),
  addNewGoal: (g) => set((state) => ({ goals: [...state.goals, g], goalsFiltered: [...state.goalsFiltered, g] })),
  removeGoal: (key) => set((state) => ({ goals: state.goals.filter(g => g.id !== key), goalsFiltered: state.goalsFiltered.filter(g => g.id !== key) })),
  setModalNewGoalOpen: () => set((state) => ({ modalNewGoalOpen: !state.modalNewGoalOpen })),
  setModalDeleteGoalOpen: () => set((state) => ({ modalDeleteGoalOpen: !state.modalDeleteGoalOpen })),
}))