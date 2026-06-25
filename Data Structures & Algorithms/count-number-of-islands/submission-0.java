class Solution {
  public int numIslands(char[][] grid) {

    if (grid == null || grid.length == 0) {
      return 0;
    }

    int rows = grid.length;
    int cols = grid[0].length;
    int islandCount = 0;

    for (int row = 0; row < rows; row++) {

      for (int col = 0; col < cols; col++) {

        if (grid[row][col] == '1') {
          islandCount++;
          dfs(grid, row, col);
        }

      }
    }

    return islandCount;

  }

  private void dfs(char[][] grid, int row, int col) {

    int rows = grid.length;
    int cols = grid[0].length;

    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return;
    }

    if (grid[row][col] == '0')
      return;

    grid[row][col] = '0';

    // explore all directions;
    //
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);

  }

}