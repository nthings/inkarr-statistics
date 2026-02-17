import { Router, Request, Response } from 'express';
import { Statistics } from '../models/Statistics';

const router = Router();

// POST /api/v1/statistics - Receive and store statistics
router.post('/', async (req: Request, res: Response) => {
  try {
    const statisticsData = req.body;
    
    // Validate required fields
    if (!statisticsData.installationId || !statisticsData.version) {
      return res.status(400).json({ 
        error: 'Missing required fields: installationId and version are required' 
      });
    }
    
    // Create new statistics entry
    const statistics = new Statistics({
      ...statisticsData,
      receivedAt: new Date(),
    });
    
    await statistics.save();
    
    console.log(`Received statistics from installation ${statisticsData.installationId} (v${statisticsData.version})`);
    
    return res.status(201).json({ 
      success: true, 
      message: 'Statistics received successfully' 
    });
  } catch (error) {
    console.error('Error saving statistics:', error);
    return res.status(500).json({ error: 'Failed to save statistics' });
  }
});

export default router;
