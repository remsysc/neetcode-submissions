class Solution {
public:
   bool isValidSudoku(std::vector<std::vector<char>> &board)
{
    std::unordered_map<int, std::unordered_set<char>> row;
    std::unordered_map<int, std::unordered_set<char>> col;
    std::unordered_map<int, std::unordered_set<char>> square;

    size_t row_length = board.size();

    // assummes it is evenly distributed
    size_t col_length = (row_length > 0) ? board[0].size() : 0;

    for (size_t r = 0; r < row_length; r++)
    {
        for (size_t c = 0; c < col_length; c++)
        {
            int subgrid = (r / 3) * (col_length / 3) + c / 3;
            char cell = board[r][c];

            if (cell == '.')
                 continue;

            if (row[r].count(cell) || col[c].count(cell) || square[subgrid].count(cell))
                return false;

            col[c].emplace(cell);
            row[r].emplace(cell);
            square[subgrid].emplace(cell);
        }
    }

    return true;
}

};
