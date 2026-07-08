import { selector } from 'recoil';
import { todoListState, todoListFilterState } from './atoms';

//根据用户选择的筛选项，返回过滤后的列表
export const filterTodoListState = selector({
    key: 'filterTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);//读取筛选条件
        const list = get(todoListState);//读取原始列表
        switch (filter) {
            case 'Show Completed': return list.filter((item) => item.isComplete === true);
            case 'Show Uncompleted': return list.filter((item) => item.isComplete === false);
            default: return list;
        }
    }
})
//计算总数、已完成数、未完成数、百分比
export const todoListStatesState = selector({
    key: 'todoListStatesState',
    get: ({ get }) => {
        const list = get(todoListState);
        const totalNum = list.length;
        const totalCompletedNum = list.filter(item => item.isComplete === true).length;
        const totalUncompletedNum = list.filter(item => item.isComplete === false).length;
        const percentNum = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentNum,
        }
    }
})
